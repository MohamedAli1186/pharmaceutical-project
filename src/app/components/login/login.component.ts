import { ReturnStatement } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor( private router: Router) { }
  @ViewChild('loginForm') loginForm!: NgForm;
  successfulloggedin: boolean = false; 
  isauth:boolean = false;

  
  
  onSubmit() {
  }
  
  

  
}