import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  controlUser = new FormControl('', [
    Validators.required
  ]);

  controlPassword = new FormControl('', [
    Validators.required
  ]);
  constructor() { }

  ngOnInit() {
  }

  onSubmit(username : HTMLInputElement, password : HTMLInputElement){
    console.log(username.value)
  }

}
