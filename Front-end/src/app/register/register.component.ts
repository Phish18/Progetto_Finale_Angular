import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  controlName = new FormControl('', [
    Validators.required
  ]);

  controlSurname = new FormControl('', [
    Validators.required
  ]);

  controlEmail = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  controlUser = new FormControl('', [
    Validators.required
  ]);

  controlPassword = new FormControl('', [
    Validators.required
  ]);

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

nome: string;
surname: string;
date: string;
email: string;
user: string;
password: string;

  onSubmit(name : HTMLInputElement, surname: HTMLInputElement, date: HTMLInputElement, email: HTMLInputElement, user: HTMLInputElement, password: HTMLInputElement){
    this.nome = name.value;
    this.surname = surname.value;
    this.date = date.value;
    this.email = email.value;
    this.user = user.value;
    this.password = password.value;

    //this.nome + this.surname + this.date + this.email + this.user + this.password
    this.http.post('https://node21.codenvy.io:34027/register',
      {
        nome : this.nome,
        cognome : this.surname,
        email : this.email,
        data_nascita : this.date,
        username : this.user,
        password : this.password
      }
    ).subscribe((data)=> { console.log(data)} );

  }
}
