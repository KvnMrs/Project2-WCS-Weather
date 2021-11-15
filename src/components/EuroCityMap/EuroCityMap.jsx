/* eslint-disable */

// import * as React from 'react';
import React, { useEffect, useState} from 'react';
import ReactMapGL, { MapContext } from 'react-map-gl';
import { WelcomeFetchCampus } from '../../services/WelcomeFetchCampus/WelcomeFetchItems';
// import 'mapbox-gl/dist/mapbox-gl.css';

// import markerSVG from './marker.svg';
import markerCampus from './markerCampus.png';


const CampusPopup = (props) => {
  const { isVisible, campus } = props;
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      <p>{campus.name}</p>
      <img src={campus.imageUrl} />
    </div>
  );
};

function CampusMarker(props) {
  const [showPopup, setShowPopup] = React.useState(false);
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
  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div style={markerStyle} onClick={handleClick}>
      {/* <CampusPopup campus={props.campus} isVisible = {showPopup}/> */}
      <img src={markerCampus} style={{ width: 20 }}></img>
    </div>
  );
}

function Map() {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  const [viewport, setViewport] = React.useState({
    latitude: 46.81,
    longitude: 8.22,
    zoom: 4,
  });

  async function promisedData() {
    const campus = await WelcomeFetchCampus()
      .then((result) => setData(result))
      .then(setLoaded(true));
    return campus;
  }

  useEffect(() => {
    (async () => {
      await promisedData();
    })();
  }, []);

  if (data.length > 0) {
    console.log(data);
  } else {
    console.log('No data yet.');
  }

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
      <div>
        {data.map((item) => (
          <CampusMarker campus={item} />
        ))}
      </div>
    </ReactMapGL>
  );
}

export default Map;
