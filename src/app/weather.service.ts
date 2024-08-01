import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getweather(city:string, units:string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=95ddd737850cf5d0d5582200c5f44ee2&units='+units);
  }
}
