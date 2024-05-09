import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  selectedRole: string = '';

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
