import { User } from '../../DataModels/User.model';
import { Organization } from '../../DataModels/Organization.model';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  selectedRole: string = '';

  password: string = '';
  email: string = '';
  userName: string = '';
  confirmPassword: string = '';
  phone: string = '';
  NId: string = '';
  orgName: string = '';
  orgStatus: string = '';
  financialCode: string = '';
  liscenceCode: string = '';
  docs: FileList | null = null;
  bankAccount: string | null = '';
  orgType: string  = '';
  submitted = false;

  constructor(private router: Router) {}
  createOrg(regForm: NgForm) {
    if(regForm.invalid){
      this.submitted = true;
    }else{
      
    }
  }
}
