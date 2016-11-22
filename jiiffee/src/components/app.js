import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import GoogleMap from './google_map'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        MapMe
        <GoogleMap lat={-34.397} lng={150.644} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
