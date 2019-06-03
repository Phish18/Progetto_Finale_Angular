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

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(user: HTMLInputElement, pass: HTMLInputElement) {
    this.http.post('https://8080-acee52e1-e7c3-463c-a1c6-4b499a21912f.ws-eu0.gitpod.io/login',
      {
        username: user.value,
        password: pass.value
      }
    ).subscribe((data) => {
      console.log(data);
      if (data.toString() == "true") {
        localStorage.setItem('username', user.value);
        localStorage.setItem('logged', data.toString());
        //alert(data.toString());
      }
    });

  }



}
