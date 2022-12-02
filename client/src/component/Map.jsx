import { Component, useState } from "react";
import { Map, GoogleApiWrapper, Marker, google, InfoWindow} from "google-maps-react";
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
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          title: "There's a thought here!",
          name: "my brain is fried",
          position: { lat: 34.052235, lng: -118.243683 }
        },
        {
          title: "Hidden thought here!",
          name: "lol",
          position: { lat: 35.052235, lng: -119.243683 }
        }
      ],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    };
    // this.onClick = this.onClick.bind(this);
  }


  handleToggleClose = () => {
    this.setState({
      showingInfoWindow: false,
    });
  }

  handleToggleOpen = (ele, marker, e) => {
    this.setState({
      selectedPlace: ele,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }
  
  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState(previousState => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: "heyyy",
            name: "",
            position: { lat, lng }
          }
        ]
      };
    });
  }

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
        // onDblclick={this.onClick}
      >
        {this.state.markers.map((ele, index) => {
          return(
            <Marker
              key={index}
              title={ele.title}
              name={ele.name}
              position={ele.position}
              onClick={this.handleToggleOpen}
            />
          )
        })}

       <InfoWindow 
          marker={this.state.activeMarker}
          onClose={this.handleToggleClose}
          visible={this.state.showingInfoWindow}
          >
           <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

        
        
      </Map> 
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
