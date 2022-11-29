import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { mapStyles } from "../assets/mapStyles";

const containerStyle = {
  width: "50%",
  height: "50%",
  float: "left",
};

const mapStyle = {
  styles: mapStyles,
};

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        containerStyle={containerStyle}
        mapStyle={mapStyle}
        zoom={10}
        initialCenter={{
          lat: 34.052235,
          lng: -118.243683,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUTgzsq1-33AaJ7larbKfO-R2coYC4-ac",
})(MapContainer);

//////// OLD CODE //////
/* import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { mapStyles } from './mapStyles.js'
// const ref = React.useRef(null);
// const [map, setMap] = React.useState();

// React.useEffect(() => {
//   if (ref.current && !map) {
//     setMap(new window.google.maps.Map(ref.current, {}));
//   }
// }, [ref, map]);

const containerStyle = {
  width: "100%",
  height: "100%",
  float: "left",
};

const options = {
  styles: mapStyles,
};

const Map = ({ data, zoom }) => {
  const center = {
    lat: 0,
    lng: 0,
  };
  // const listings = data.listings;

  // const markerElems = listings.map((listings, i) => {
  //   const position = {
  //     lat: listings.coordinates.lat,
  //     lng: listings.coordinates.lng,
  //   };

  //   const onMarkerClick = (e) => {
  //     console.log(listings.address);
  //   };

  //   return <Marker onClick={onMarkerClick} key={i} position={position} />;
  // });
  const key = "AIzaSyAUTgzsq1-33AaJ7larbKfO-R2coYC4-ac"
  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        options={options}
      >
        {/* {markerElems} */
// <></>
//       </GoogleMap>
//       <h1 className="text-6xl text-black">Are you even working?</h1>
//     </LoadScript>
//   );
// };
// export default Map;
// */
