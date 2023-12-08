import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import{ HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { Signup2Component } from './components/signup2/signup2.component';

const appRoutes: Routes =[
  {
    path:'',component:LoginComponent

  },
  {
    path:'signup',component:SignupComponent

  },
  {
    path:'signup2',component:Signup2Component

  },
  {
    path:'home/:id',component:EmployeesComponent

  },
  {
    path:'edit/:id',component:EmployeeEditComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    EmployeeEditComponent,
    LoginComponent,
    SignupComponent,
    Signup2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
