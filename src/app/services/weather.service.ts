import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  ApiKey: string = "22c9037be675c80a4f75a3e8f4dd401d"  

  constructor(private http: HttpClient) { }


  getWeather(pickedCity :string) :Observable<any>{

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${pickedCity}&appid=${this.ApiKey}`

    return this.http.get(URL)

  }

}