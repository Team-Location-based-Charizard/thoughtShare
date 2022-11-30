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

// const renderMarkers = (Map, maps) => {
//   let marker = new google.Map.Marker({
//     position: { lat: 34.052235, lng: -118.243683 },

//     title: "Hello World!",
//   });
//   return marker;
// };

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          id: "1",
          thought: "SOMA",
          position: { lat: 37.778519, lng: -122.40564 }
        }
      ]
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    console.log('did mount?')
    fetch('http://localhost:3000/api/thoughts/allThoughts')
    .then((data) => {
      console.log(data)
      JSON.stringify(data);
    })
    .then((data) => {
      console.log(data)
      for(let i = 0 ; i < data.length ; i++){
        let lat = data.lat;
        let lng = data.lng;
        this.setState(previousState => {
          let mark = {
            id: data._id,
            thought: data.thought,
            position : { lat, lng },
          }
          return {
            markers :[
              ...previousState.markers,
              mark
            ]
          }
        })
      }
    })
  };


  onClick(t, map, coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState(previousState => {
      return {
        markers: [
          ...previousState.markers,
          {
            id: "",
            thought: "this is a thought!",
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
        onClick={this.onClick}
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