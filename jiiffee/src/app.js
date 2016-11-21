import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'
import superagent from 'superagent'

class App extends Component {
  constructor(){
    super()
    this.state = {
      venues: [],
      location: {
        lat: 40.7575285,
        lng: -73.9884469
      }
    }
  }


  componentDidMount(){
    console.log('component did mount')

    const x = navigator.geolocation

      x.getCurrentPosition(success, failure)

      function success(position) {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        console.log('LAT!!!!', lat)
        console.log('LNG!!!!', lng)
      }


      function failure() {
        console.log('ERROR')
      }


    const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=40.7575285,-73.9884469&client_id=4RKAP3ZFW34WFK4KXFD4I51PKQRGFMXAZAUQ5V5OETQDDBBA&client_secret=WNROPSU51SPJWCAJZX2QT1KOULYM41SWLKVSJS5PYCKOPVIB'

    superagent
    .get(url)
    .query(null)
    .set('Accept', 'text/json')
    .end((err, response) => {


      const venues = response.body.response.venues
      console.log(JSON.stringify(venues))
      this.setState({
        venues: venues
      })
    })

  }



  render(){

    location: {
      lat: lat,
      lng: lng
    }

    return (
      <div>
        <div style={{width:300, height:600, background:'red'}}>
          <Map center={this.state.location} markers={this.state.venues} />
        </div>
        <Places venues={this.state.venues} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
