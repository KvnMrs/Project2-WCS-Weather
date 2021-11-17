/* eslint-disable */

// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import ReactMapGL, { MapContext } from 'react-map-gl';
import { WelcomeFetchCampus } from '../../services/WelcomeFetchCampus/WelcomeFetchItems';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import { capitales } from '../../services/CapitalesFetch/CapitalesJSON';
import markerSVG from './marker.svg';
import markerCampus from './markerCampus.png';
import CapitalesFetch from '../../services/CapitalesFetch/CapitalesFetch';

function CampusMarker(props) {
  const context = React.useContext(MapContext);
  const { longitude, latitude } = props.campus;

  const [x, y] = context.viewport.project([
    Number(longitude),
    Number(latitude),
  ]);

  const markerStyle = {
    position: 'absolute',
    // background: '#fff',
    left: x,
    top: y,
    marginLeft: -20 / 2,
    marginTop: -15,
  };

  return (
    <div style={markerStyle}>
      {/* <CampusPopup campus={props.campus} isVisible = {showPopup}/> */}
      <img src={markerCampus} style={{ width: 20 }}></img>
    </div>
  );
}

function CapitaleMarker(props) {
  const context = React.useContext(MapContext);
  const { longitude, latitude } = props.capitale;
  const [x, y] = context.viewport.project([
    Number(longitude),
    Number(latitude),
  ]);

  const markerStyle = {
    position: 'absolute',
    // background: '#fff',
    left: x,
    top: y,
    marginLeft: -20 / 2,
    marginTop: -15,
  };

  return (
    <div style={markerStyle}>
      {/* <CampusPopup campus={props.campus} isVisible = {showPopup}/> */}
      <img src={markerSVG} style={{ width: 20 }}></img>
    </div>
  );
}

function Map() {
  const [loaded, setLoaded] = useState(false);
  const [campus, setCampus] = useState([]);
  const [cityCapitales, setCityCapitales] = useState([]);

  const [viewport, setViewport] = React.useState({
    latitude: 46.81,
    longitude: 8.22,
    zoom: 4,
  });

  async function promisedData() {
    const campus = await WelcomeFetchCampus();
    const capitales = await CapitalesFetch();
    console.log(capitales);
    setCampus(campus);
    setCityCapitales(capitales);

    setLoaded(true);
  }

  useEffect(() => {
    (async () => {
      await promisedData();
    })();
  }, []);

  return (
    <ReactMapGL
      mapboxApiAccessToken={
        'pk.eyJ1Ijoia3ZubXJzIiwiYSI6ImNrdm8wN3VlNTA5YWMyb2tnbXNvODkzaW0ifQ.mXZMpjszbpePOR6KT4OwBw'
      }
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://style/mapbox/streets-v9"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {campus.map((item) => (
        <CampusMarker campus={item} />
      ))}
      {cityCapitales.map((capitale) => (
        <CapitaleMarker capitale={capitale} />
      ))}
    </ReactMapGL>
  );
}

export default Map;
