import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  alerts: [string, string];
  daily: [string, string];
  hourly: [string, string];
  today: [string, string ];
  description: [string, string];
  skyInfo: [string, string];
  skyDescription: [string, string];
  temperature: [string, string];
  comfort: [string, string];
  highTemperature: [string, string];
  lowTemperature: [string, string];
  humidity: [string, string];
  dewPoint: [string, string];
  iconName: [string, string];
  iconLink: [string, string];
  activeAlerts: [string, string];
  country: [string, string];
  state: [string, string];
  city: [string, string];
}

@Injectable()
export class ConfigService {
  apiEndpoint = 'https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather';
  constructor(private http: HttpClient) { }
  getConfig() {
    console.log("Get Config Called");
    return this.http.get<Config>(this.apiEndpoint)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.apiEndpoint, { observe: 'response' });
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An Error occurred: ', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status},` +
        `body was: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened. Try again.'
    );
  };
}



