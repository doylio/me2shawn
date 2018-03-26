import React, { Component } from 'react';
import Card from './Card';
import Arrow from './Arrow';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    //Converts DEG to RAD (for computeDistance fn)
    const deg2rad = (deg) => deg * (Math.PI/180);

    //Computes distance in km from 2 sets of lat/long coordinates
    const computeDistance = (lat1,lon1) => {
      //Shawn's current position (set to Chongqing)
      const lat2 = 29.59151;
      const lon2 = 106.53043;

      const R = 6371; // Radius of the earth in km
      const dLat = deg2rad(lat2-lat1); //deg2rad above
      const dLon = deg2rad(lon2-lon1); 
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      const d = R * c; // Distance in km
      return d;
    }

    //Store location
    const storeDistance = (position) => {
      console.log(position);
      const distance = Math.floor(computeDistance(position.lat, position.lon));
      this.setState({distance: distance});
    }

    //Get user Location
    fetch('http://ip-api.com/json')
      .then(response=>response.json())
      .then(response=>storeDistance(response));
    
    //Get User's time
    const userTime = Date().split(" ")[4].slice(0,-3);
    this.setState({userTime: userTime,});

    //Get Shawn's current time    
    fetch("https://api.timezonedb.com/v2/get-time-zone?key=OGHVNR6P1LPH&format=json&by=zone&zone=Asia/Shanghai")
      .then(response => response.json())
      .then(data => this.setState({shawnTime: data.formatted.slice(11,-3)}));
  }

  render() {
    console.log(this.state);
    if(!this.state.distance || !this.state.userTime || !this.state.shawnTime) {
      return <h1 className='white tc'>Loading...</h1>
    }
    else {
      return (
      <div className='tc athelas'>
        <div className='white'>
          <h1>Me2Shawn</h1>
          <h2>How far are you from Shawn right now?</h2>
        </div>
        <div className='flex items-center justify-center ma3'>
          <Card name='Me' time={this.state.userTime}/>
          <Arrow distance={this.state.distance}/>
          <Card name='Shawn' time={this.state.shawnTime}/>
        </div>
      </div>
      );
    } 
  }
}

export default App;
