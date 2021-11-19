import React from 'react';
import ReactMapGL, { MapContext } from 'react-map-gl';
import markerSVG from './marker.svg';
import markerCampus from './markerCampus.png';

function CampusMarker({ campus }) {
  const context = React.useContext(MapContext);
  const { longitude, latitude } = campus;
  const [x, y] = context.viewport.project([
    Number(longitude),
    Number(latitude),
  ]);

  const markerStyle = {
    position: 'absolute',
    left: x,
    top: y,
    marginLeft: -20 / 2,
    marginTop: -15,
  };

  return (
    <div style={markerStyle}>
      {/* <CampusPopup campus={props.campus} isVisible = {showPopup}/> */}
      <img src={markerCampus} style={{ width: 20 }} alt="campusMarker" />
    </div>
  );
}

function CapitaleMarker({ capitale }) {
  const context = React.useContext(MapContext);
  const { longitude, latitude } = capitale;
  const [x, y] = context.viewport.project([
    Number(longitude),
    Number(latitude),
  ]);

  const markerStyle = {
    position: 'absolute',
    left: x,
    top: y,
    marginLeft: -20 / 2,
    marginTop: -15,
  };

  return (
    <div style={markerStyle}>
      {/* <CampusPopup campus={props.campus} isVisible = {showPopup}/> */}
      <img src={markerSVG} style={{ width: 20 }} alt="capitalMarker" />
    </div>
  );
}

function Map({
  capitales,
  campus,
  showCampus,
  showCapitales,
}) {
  const [viewport, setViewport] = React.useState({
    latitude: 46.81,
    longitude: 8.22,
    zoom: 4,
  });
  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOXAPIACCESSTOKEN}
      latitude={viewport.latitude}
      longitude={viewport.longitude}
      zoom={viewport.zoom}
      width="100%"
      height="100%"
      mapStyle="mapbox://style/mapbox/streets-v9"
      onViewportChange={(viewportMap) => setViewport(viewportMap)}
    >
      {
        showCampus ? campus.map((item) => (
          <CampusMarker campus={item} />
        )) : ''
      }
      {
        showCapitales ? capitales.map((capitale) => (
          <CapitaleMarker capitale={capitale} />
        )) : ''
      }
    </ReactMapGL>
  );
}

export default Map;
