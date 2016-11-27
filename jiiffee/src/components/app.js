import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GoogleMap from './google_map'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: -34.397, lng: 150.644}
  }

  render() {

    function success(position){
      console.log('---------->', position)
      var lat = position.coords.latitude
      var lng = position.coords.longitude
      console.log('LAT!!!!', lat)
      console.log('LNG!!!!', lng)

    }

    function failed(){
      console.log('ERROR')
    }

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, failed)
    }
    return (
      <div style={{height: '100%'}}>
        MapMe
        <button onClick={() => this.setState({ lat: 40.7128, lng: -74.0059})}>
          center!
        </button>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
