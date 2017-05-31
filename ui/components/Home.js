// Home.js
import React, { Component } from 'react'
import Img from 'react-image'

class Home extends Component {

initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
    });
    var marker = new google.maps.Marker({
    position: uluru,
    map: map
    });
  }
  render() {
    return (
      <h2 className='title'>
        Welcome to APPPI HOME WORK
        My Google Maps Demo
    	<div id="map"></div>
     <div><img src={'logo.jpg'} alt="MyPic" /><span> {this.props.name}</span></div>

    	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCv0WB-Y40HFrMBLuBSw1GdJqsDSbxCYxY&callback=initMap">
    initMap();
    </script>
      </h2>

    )
  }
}


export default Home




