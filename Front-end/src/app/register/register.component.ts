import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

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

  constructor() { }

  ngOnInit() {
  }

   /*myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }*/

  onSubmit(name : HTMLInputElement, surname: HTMLInputElement, date: HTMLInputElement, email: HTMLInputElement, user: HTMLInputElement, password: HTMLInputElement){
    //nome = name.value;
  }
}
