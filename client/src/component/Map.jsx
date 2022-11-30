import { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
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
          title: "The marker`s title will appear as a tooltip.",
          name: "SOMA",
          position: { lat: 37.778519, lng: -122.40564 },
        },
      ],
    };
    this.onClick = this.onClick.bind(this);
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      return "hello";
    }
  };

  showPosition(t, map, position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    this.setState((previousState) => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: "heyyy",
            name: "",
            position: { lat, lng },
          },
        ],
      };
    });
  }
  // showPosition(position) {
  //   // Recenter gmap to following
  //   lat = position.coords.latitude
  //   long = position.coords.longitude
  // }

  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    this.setState((previousState) => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: "heyyy",
            name: "",
            position: { lat, lng },
          },
        ],
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
        onDblclick={this.onClick}
      >
        
        {this.state.markers.map((marker, index) => (
          <Marker
            key={index}
            title={marker.title}
            name={marker.name}
            position={marker.position}
          />
        ))}
        
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUTgzsq1-33AaJ7larbKfO-R2coYC4-ac",
})(MapContainer);
