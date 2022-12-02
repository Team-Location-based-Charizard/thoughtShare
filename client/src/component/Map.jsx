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
          name: "We think 'niiice' but we type 'niceee'",
          position: { lat: 35.052235, lng: -119.243683 }
        },
        {
          title: "Thought at 3:14AM",
          name: "They don’t let you smile in passport photos because they want you to look the same as if you were standing in line at customs for an hour",
          position: { lat: 34.052235, lng: -117.243683 }
        },
        {
          title: "Hi Zaw",
          name: "Zaw, why you in Bakersfield? -Wilson",
          position: { lat: 34.012233, lng: -118.486536 }
        },
        {
          title: "Thought from Zaw in Bakersfield",
          name: "Sunny D tastes like someone made a bet that they could make orange juice without oranges",
          position: {lat: 37.8272, lng:-122.2913 }
        },
        {
          title: "Google Maps cars",
          name: "Somebody at google was just like 'yea, just have someone drive down every road on earth.' And you know what? They did it.",
          position: { lat: 33.993876, lng: -117.941743 }
        },
      ],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
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
  
  // componentDidMount() {
  //   console.log('did mount?')
  //   fetch('http://localhost:3000/api/thoughts/allThoughts')
  //   .then((data) => {
  //     console.log(data)
  //     JSON.stringify(data);
  //   })
  //   .then((data) => {
  //     console.log(data)
  //     for(let i = 0 ; i < data.length ; i++){
  //       let lat = data.lat;
  //       let lng = data.lng;
  //       this.setState(previousState => {
  //         let mark = {
  //           id: data._id,
  //           thought: data.thought,
  //           position : { lat, lng },
  //         }
  //         return {
  //           markers :[
  //             ...previousState.markers,
  //             mark
  //           ]
  //         }
  //       })
  //     }
  //   })
  // };




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
        //double click to place pin.
        onDblclick={this.onClick}
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
              <h1 className="text-xl font-normal text-black">{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

        
        
      </Map> 
    );
  }
}



export default GoogleApiWrapper({
  apiKey: "AIzaSyAUTgzsq1-33AaJ7larbKfO-R2coYC4-ac",
})(MapContainer);
