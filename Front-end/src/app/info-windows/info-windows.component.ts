import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-info-windows',
  templateUrl: './info-windows.component.html',
  styleUrls: ['./info-windows.component.css']
})
export class InfoWindowsComponent implements OnInit {

  @Input() qr: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  prenota() {
    if (localStorage.getItem('prenotato') == null) {
      this.http.put(environment.url + 'prenota',
        {
          qr: this.qr
        },
        {
          withCredentials: true
        }
      ).subscribe((data) => {
        if (data) {
          localStorage.setItem('prenotato', this.qr);
        }
      });
    }else{
      alert('Hai già prenotato')
    }
  }
}
