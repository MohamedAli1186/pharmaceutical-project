import { User } from './../../DataModels/User.model';
import { Organization } from './../../DataModels/Organization.model';
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

  // Create an instance of the Organization class
  organization = new Organization(
    1, // orgId
    'Organization Name', // orgName
    'banking', // orgType
    true, // orgStatus
    12345, // licenseId
    67890, // financialIdentifier
    ['path/to/attachment1.jpg', 'path/to/attachment2.jpg'], // attachments
    123456789 // bankAccountNumber
  );
  // Create an instance of the User class
  User = new User(
    1, // orgId
    1, // permissionId
    'orgAdminId123', // orgAdminId
    'username123', // username
    'password123', // password
    '+1234567890', // mobileNumber
    '123456789012345', // nationalId
    'user@example.com' // email
  );

  @ViewChild('studentForm') studentForm!: NgForm;
  @ViewChild('instructorForm') instructorForm!: NgForm;

  constructor(private router: Router) {}

  onSubmit(role: string) {
    if (role === 'Student') {
      if (!this.studentForm || !this.studentForm.valid) {
        alert('Please fill out all fields.');
        return;
      }
    } else if (role === 'Instructor') {
      if (!this.instructorForm || !this.instructorForm.valid) {
        alert('Please fill out all fields.');
        return;
      }
    }

    alert('Signed up successfully!');
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 1000);
  }
}
