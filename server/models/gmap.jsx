import React, { Component, useContext } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { mapStyles } from "../assets/mapsStyles";

const containerStyle = {
  width: "100%",
  height: "100%",
  float: "left",
};

const options = {
  styles: mapStyles,
};

export default function Map({ data, zoom }) {
  const center = {
    lat: data.lat,
    lng: data.lng,
  };
  const listings = data.listings;

  const markerElems = listings.map((listings, i) => {
    const position = {
      lat: listings.coordinates.lat,
      lng: listings.coordinates.lng,
    };

    const onMarkerClick = (e) => {
      console.log(listings.address);
    };

    return <Marker onClick={onMarkerClick} key={i} position={position} />;
  });

  return (
    <LoadScript googleMapsApiKey="AIzaSyADsm4pETi_2Ja_1LHGQae6MGBY2SU1UOk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        options={options}
      >
        {markerElems}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}



/*
"dependencies": {
    "@emotion/react": "^11.9.3",
    "@emotion/styled": "^11.9.3",
    "@googlemaps/js-api-loader": "^1.14.3",
    "@googlemaps/react-wrapper": "^1.1.35",
    "@material-ui/core": "^4.12.4",
    "@mui/icons-material": "^5.8.4",
    "@mui/material": "^5.8.6",
    "@mui/styled-engine-sc": "^5.8.0",
    "@react-google-maps/api": "^2.12.0",
    "bootstrap": "^5.2.0-beta1",
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "google-maps-react": "^2.0.6",
    "mongoose": "^6.4.1",
    "react": "^17.0.2",
    "react-bootstrap": "^2.4.0",
    "react-dom": "^17.0.2",
    "react-hot-loader": "^4.6.3",
    "react-router": "^5.3.3",
    "react-router-dom": "^5.3.3",
    "styled-components": "^5.3.5",
    "url-loader": "^4.1.1",
    "webpack": "^5.73.0"
  },
  "devDependencies": {
    "@babel/core": "^7.1.2",
    "@babel/plugin-syntax-jsx": "^7.17.12",
    "@babel/preset-env": "^7.1.0",
    "@babel/preset-react": "^7.17.12",
    "axios": "^0.27.2",
    "babel-loader": "^8.2.3",
    "bcrypt": "^5.0.1",
    "concurrently": "^7.2.2",
    "cookie-parser": "^1.4.6",
    "cross-env": "^6.0.3",
    "css-loader": "^6.7.1",
    "dotenv": "^16.0.1",
    "eslint": "^7.17.0",
    "eslint-plugin-react": "^7.21.5",
    "file-loader": "^6.2.0",
    "html-webpack-plugin": "^5.5.0",
    "isomorphic-fetch": "^3.0.0",
    "joi": "^17.6.0",
    "joi-password-complexity": "^5.1.0",
    "jsonwebtoken": "^8.5.1",
    "nodemon": "^2.0.18",
    "prettier": "^2.7.1",
    "react-scripts": "4.0.3",
    "rollup-plugin-styles": "^3.14.1",
    "sass-loader": "^12.3.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.64.1",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.9.3",
    "webpack-hot-middleware": "^2.24.3"
*/