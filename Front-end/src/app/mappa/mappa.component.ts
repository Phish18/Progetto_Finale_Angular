import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monopattino } from './monopattino.model';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {

  public lat;
  public lon;
  markers: Monopattino[];

  constructor(public http : HttpClient) {
    this.getLocation();
    this.getMonopattini();
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
    this.http.get<Monopattino[]>('https://8080-acee52e1-e7c3-463c-a1c6-4b499a21912f.ws-eu0.gitpod.io/getMonopattini').subscribe(result => {
      this.markers = result;
    });
  }

}
