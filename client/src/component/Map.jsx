import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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
    <LoadScript googleMapsApiKey="AIzaSyCnkJANv6eYZSSLD7AUl_lJkees8dysiTI">
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
};
export default Map;
