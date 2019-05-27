import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

logged : string;

  constructor() {
    this.logged = localStorage.getItem('logged');
  }

  ngOnInit() {
  }

}
