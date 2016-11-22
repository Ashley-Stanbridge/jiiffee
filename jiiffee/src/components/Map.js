// import React from 'react'
// import {GoogleApiWrapper} from 'google-maps-react';
//
// export class Map extends React.Component {
//   componentDidMount() {
//     this.loadMap()
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     if(prevProps.google !== this.props.google) {
//       this.loadMap()
//     }
//   }
//
//   loadMap() {
//     if(this.props && this.props.google) {
//       const {google} = this.props
//       const maps = google.maps
//
//       const mapRef = this.refs.map
//       const node = ReactDOM.findDOMNode(mapRef)
//
//       let zoom = 15
//       let lat = 37.7774929
//       let lng = -122.419416
//
//       const center = new maps.LatLng(lat, lng)
//       const mapConfig = Object.assign({}, {
//         centre: center,
//         zoom: zoom
//       })
//       this.map = new maps.Map(node, mapConfig)
//     }
//   }
//
//   render(){
//     return (
//       <div ref='map'>
//         Loading map..
//       </div>
//     )
//   }
// }
