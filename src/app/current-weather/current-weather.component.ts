import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { Config, ConfigService } from '../config/config.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  constructor(private configService: ConfigService) {}

  error: any;
  headers: string[];
  config: Config;

  currCityWeather = new Weather(
    '--',
    '--',
    '--',
    '--',
    '--',
    '#',
     '--',
     '--',
    false,
    '--'
  );
  ngOnInit() {
    this.showConfigResponse();
  }
  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.config = {...data});
  }
  showConfigResponse() {
    this.configService.getConfigResponse()
      .subscribe(resp => {
        const keys = resp.headers.keys();
        this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
        this.config = { ... resp.body };
        // Map the data to the model
        this.currCityWeather.city = this.config.today['city'];
        this.currCityWeather.state = this.config.today['state'];
        this.currCityWeather.currTemp = this.config.today['temperature'];
        this.currCityWeather.hiTemp = this.config.today['highTemperature'];
        this.currCityWeather.lowTemp = this.config.today['lowTemperature'];
        this.currCityWeather.currIcon = this.config.today['iconLink'];
        this.currCityWeather.description = this.config.today['description'];
        this.currCityWeather.zip = '64111'; // Faking it
        this.currCityWeather.alerts = (Number(this.config.today['activeAlerts']) > 0);
        // If activeAlerts is false, set warnings to an empty string.
        this.currCityWeather.warnings =  (this.currCityWeather.alerts)? this.config.alerts['watch'][0]['description'] : '';
      });
  }
}
