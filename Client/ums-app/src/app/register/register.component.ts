import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  // constructor() {}

  // editProfileForm = new FormGroup({
  //   firstName: new FormControl('', Validators.required),
  //   lastName: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', Validators.required),
  // });

  // errorMessages: any = {}; // Initialize errorMessages as an empty object

  // handleSubmit(event: Event) {
  //   event.preventDefault();
  //   // Clear previous error messages
  //   this.errorMessages = {};

  //   if (this.editProfileForm.valid) {
  //     console.log(this.editProfileForm.value);
  //   } else {
  //     this.editProfileForm.markAllAsTouched();

  //     // Iterate through each form control to check for validation errors
  //     Object.keys(this.editProfileForm.controls).forEach((key) => {
  //       const controlErrors = this.editProfileForm.get(key)?.errors;
  //       if (controlErrors != null) {
  //         Object.keys(controlErrors).forEach((keyError) => {
  //           switch (keyError) {
  //             case 'required':
  //               this.errorMessages[key] = `${key} is required`;
  //               break;
  //             case 'email':
  //               this.errorMessages[key] = `${key} must be a valid email`;
  //               break;
  //             default:
  //               break;
  //           }
  //         });
  //       }
  //     });
  //   }
  // }

  signupObj: Signup;
  issubmit: boolean = false;
  constructor(private http: HttpClient, private router: Router) {
    this.signupObj = new Signup();
  }
  onSignUp() {
    console.log('Login object:', this.signupObj);
    this.issubmit = true;
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('logintoken')}`);

    this.http
      .post<any>('https://localhost:7288/api/UserAPI', this.signupObj)
      .subscribe(
        (response: any) => {
          console.log('Response from server:', response);
          if (response) {
            alert('signUp successful');
            this.router.navigateByUrl('/login');
          }
        },
        (error: any) => {
          if (error.error.msg) {
            alert(error.error.msg);
          } else {
            alert('Make sure to fill all the fields correctly');
          }
          // alert(error.error.msg);
          // console.log('Error:', error);
          // this.router.navigateByUrl('/signup');
        }
      );
  }
}

export class Signup {
  UserName: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  Role: string;
  constructor() {
    this.Email = '';
    this.Password = '';
    this.Role = 'user';
    this.UserName = '';
    this.LastName = '';
    this.FirstName = '';
  }
}
