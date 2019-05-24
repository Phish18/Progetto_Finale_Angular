//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


//Routing
import { RouterModule, Routes } from '@angular/router';

//Material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule, MatNativeDateModule, MatIconModule} from '@angular/material/';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

//Components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
