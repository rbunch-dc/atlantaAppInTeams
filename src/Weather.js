import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'
import $ from 'jquery'

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""
		}
	}
	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		$.getJSON(url, (weatherData) =>{
			console.log(weatherData);
			this.setState({
				temp: weatherData.main.temp,
				temp_max: weatherData.main.temp_max,
				temp_min: weatherData.main.temp_min,
				icon: weatherData.weather[0].icon,
				desc: weatherData.weather[0].description,
			})
		});
	}

  render() {
	return(
		<div>
			<h1>Real-time Atlanta Weather!</h1>
			<p>The temp is: {this.state.temp}</p>
		</div>
	);
  }
}

export default Weather;
