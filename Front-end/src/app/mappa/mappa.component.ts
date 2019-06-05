import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monopattino } from './monopattino.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {

  public lat;
  public lon;
  markers: Monopattino[];

  //Icon position scooters
  iconScooters = {
    url: 'assets/markerbici.png',
    scaledSize: {
      width: 30,
      height: 30
    }
  };

  constructor(public http: HttpClient) {
    if (localStorage.getItem('logged') == 'true') {
      this.getLocation();
      this.getMonopattini();
    } else {
      alert('Accesso negato!');
    }
  }

  ngOnInit() {
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getMonopattini() {
    this.http.get<Monopattino[]>(environment.url + 'getMonopattini',
    {
      withCredentials: true
    }).subscribe(result => {
      this.markers = result;
    });
  }

  localStorageGet(key: string): string{
    return localStorage.getItem(key);
  }

}
