import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

logged : boolean;

  constructor(public http : HttpClient) {
    this.logged = localStorage.getItem('logged') === "true" ? true : false;
  }

  ngOnInit() {
  }

  logout() : void {
    this.logged = false;
    this.http.post('https://8080-acee52e1-e7c3-463c-a1c6-4b499a21912f.ws-eu0.gitpod.io/logout',
      {
        username: localStorage.getItem('username')
      })
      .subscribe((data) => {
      localStorage.setItem('logged', data.toString());
    });
  }

}
