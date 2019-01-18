import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {

  constructor() { }

  currCityWeather = new Weather(
    'Kansas City',
    'MO',
    33,
    32,
    26,
    '../assets/img/WeatherAPI.icon.8.fog.png',
     'Low clouds. Chilly.',
     64111,
    true,
    'Winter Weather Advisory'
  );
}
