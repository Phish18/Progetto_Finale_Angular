import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
    if (localStorage.getItem('logged') == 'false') {
      this.http.post(environment.url + 'login',
        {
          username: user.value,
          password: pass.value
        },
        {
          withCredentials: true
        }
      ).subscribe((data) => {
        if (data.toString() == "true") {
          localStorage.setItem('logged', data.toString());
          alert("Successfully logged!")
        }
      });
    }
  }
}
