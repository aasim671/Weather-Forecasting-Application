import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  myWeather:any;
  temperature:number=0;
  feelsLikeTemp:number=0;
  humdity:number=0;
  pressure:number=0;
  summary:string='';
  icon:string='';
  city:string='Dallas';
  units:string='imperial';
  constructor(private weatherService: WeatherService) { }


  ngOnInit(): void {
    this.weatherService.getweather(this.city, this.units).subscribe({
      next: (res) => {
        console.log(res)
        this.myWeather=res;
        console.log(this.myWeather);

        this.temperature=this.myWeather.main.temp;
        this.humdity=this.myWeather.main.humidity;
        this.pressure=this.myWeather.main.pressure;
        this.feelsLikeTemp=this.myWeather.main.feels_like;
        this.summary=this.myWeather.weather[0].main;
        this.icon='https://openweathermap.org/img/wn/' +this.myWeather.weather[0].icon  + '@2x.png';
      },
      error: (error) => console.log(error.message),
      complete: () => console.info('Api call completed')
    })
  }
}
