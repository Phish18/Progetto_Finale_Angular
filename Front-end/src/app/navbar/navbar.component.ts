import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    localStorage.setItem('logged', 'false');
  }

  logout(): void {
    if (localStorage.getItem('logged') == 'true') {
      this.http.get(environment.url + 'logout', {
        withCredentials: true
      })
        .subscribe((data) => {
          if (!data) {
            localStorage.setItem('logged', 'false');
            alert("Succesfully logout!");
          }
        });
    }
  }

  getLogged(): string {
    return localStorage.getItem('logged');
  }

}
