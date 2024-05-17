import { ReturnStatement } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  phone: string = '';
  password: string = '';
  notEmpty = true;
  valid = true;
  login() {
    if (this.phone.trim() === '' || this.password.trim() === '') {
      this.notEmpty = false;
    } else{ 
          
      if (this.phone === '010244' && this.password === '1233') {
      this.router.navigate(['main']);
    } else {
      this.valid = false;
    }
  
  }
  }

  hideErrors() {
    this.notEmpty = true;
    this.valid=true; 
  }
}
