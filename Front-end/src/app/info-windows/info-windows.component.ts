import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-windows',
  templateUrl: './info-windows.component.html',
  styleUrls: ['./info-windows.component.css']
})
export class InfoWindowsComponent implements OnInit {

@Input() qr: string;

  constructor(public http : HttpClient) { }

  ngOnInit() {
  }

  prenota() {
    this.http.post('https://8080-acee52e1-e7c3-463c-a1c6-4b499a21912f.ws-eu0.gitpod.io/prenota',
      { qr: this.qr }
    ).subscribe((data) => {
      console.log(data);
    });
  }
}
