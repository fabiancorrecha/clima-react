import React, { Component } from 'react';

import WeatherForm from './components/weatherForm.js';
import WeatherInfo from './components/weatherInfo.js';

import {WEATHER_KEY} from './key.js';

class App extends Component {

    state = {
      temperature : '',
      description : '',
      himidity : '',
      wind_speed : '',
      city : '',
      country : '',
      error : null
    }


    getWeather = async e => {
        e.preventDefault();
        const {city, country}= e.target.elements;
        const countryValue = country.value;
        const cityValue = city.value;

        if(cityValue && countryValue ){
          const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
          const response = await fetch(API_URL);
          const data = await response.json();
          console.log(data);
         
          this.setState({
              temperature : data.main.temp,
              description : data.weather[0].description,
              himidity : data.main.humidity,
              wind_speed : data.wind.speed,
              city : data.name,
              country : data.sys.country,
              error : null
          });
  
        } else {
          this.setState({
              error : 'Por favor ingrese una ciudad y pais'
          });
        }
    }

  render() {
    return (
      <div className='container p-4'>
            <div className="row">
                    <div className="col-md-4 mx-auto">
                        <WeatherForm getWeather={this.getWeather} />
                        <WeatherInfo {... this.state}/>
                     </div>
            </div>
      </div>
    );
  }
}

export default App;