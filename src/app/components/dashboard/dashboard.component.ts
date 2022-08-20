import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  savedCity : string = localStorage.getItem('savedCityWeather') || "";
  searchCity :string = this.savedCity;
  isCitySaved : boolean = localStorage.hasOwnProperty('savedCityWeather')
  displayCity : string = "";
  localTime : any = "";  
  temp: number = 0;
  humidity: number = 0;
  weather: string = '';
  query: boolean = false;
  loading: boolean = false;
  errorMessage: string = '';
  country: string = '';
  imgIcon: string = '';

  

  urlImagen: string = "https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png"

  constructor(private _weatherService: WeatherService) { }

  checkKey(e: any): void {
    if (e.key === 'Enter') {
      this.getWeather();      
    }
  }

  getWeather() {
    this.errorMessage = ""
    this.query = false;
    this.loading = true;
    this._weatherService.getWeather(this.searchCity).subscribe(

      {
        next: (data) => {

          console.log(data)
          console.log(data.sys.country)

          this.loading = false;
          this.query = true;
          this.displayCity = data.name;
          
          let newDate = new Date((new Date().getTime() + (data.timezone)*1000)).toUTCString();          
          this.localTime = newDate.substring(0,newDate.length - 3)

          this.temp = data.main.temp - 273.15;
          this.humidity = data.main.humidity;
          this.country = data.sys.country;
          this.weather = data.weather[0].main + " (" + data.weather[0].description+ ")."
          let iconCode = data.weather[0].icon;
          this.imgIcon = "http://openweathermap.org/img/w/" + iconCode + ".png";

        },
        error: (error) => {
          this.loading = false
          this.errorMessage = error.error.message;
        },        
        complete: () => this.searchCity = ""
      })
  }
  saveCity() {    
    localStorage.setItem("savedCityWeather", this.displayCity)
    this.savedCity = localStorage.getItem("savedCityWeather") || "";
    this.searchCity = this.savedCity;
    this.isCitySaved  = localStorage.hasOwnProperty('savedCityWeather')
    this.getWeather()
    
  }

  deleteCity(){
    localStorage.removeItem("savedCityWeather")
    this.isCitySaved  = localStorage.hasOwnProperty('savedCityWeather')
    this.query = false; 
  }
  
  ngOnInit(): void {

    if(this.searchCity !== ""){
      this.getWeather()
    }
    console.log(this.savedCity.length)
    
  } 



}
