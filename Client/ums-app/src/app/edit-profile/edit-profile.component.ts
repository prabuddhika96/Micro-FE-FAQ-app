import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { getData, sendRouteNames, state$ } from '@eyepax/utility';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule, CommonModule],
  templateUrl: 'edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EditProfileComponent {
  // constructor(private dialog: MatDialog) {}
  // userDetails: User = {
  //   id: 1,
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   email: 'john@gmail.com',
  // };

  // editProfileForm = new FormGroup({
  //   firstName: new FormControl(this.userDetails.firstName, Validators.required),
  //   lastName: new FormControl(this.userDetails.lastName, Validators.required),
  //   email: new FormControl(this.userDetails.email, [
  //     Validators.required,
  //     Validators.email,
  //   ]),
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

  // Openpopup(code: any, title: any, component: any) {
  //   var _popup = this.dialog.open(PopUpComponent, {
  //     width: '40%',
  //     enterAnimationDuration: '100ms',
  //     exitAnimationDuration: '100ms',
  //     data: { title: title, code: code },
  //   });
  //   _popup.afterClosed().subscribe((item) => {});
  // }

  // changePassword() {
  //   // alert();
  //   this.Openpopup(0, 'Change Password', PopUpComponent);
  // }

  // subscription!: Subscription;
  // ngOnInit() {
  //   this.subscription = state$.subscribe((data: any) => {
  //     console.log('Angular rxjs->', data);
  //   });
  // }
  signupObj: EditProfile;
  issubmit: boolean = false;
  constructor(private http: HttpClient, private router: Router) {
    this.signupObj = new EditProfile();
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

export class EditProfile {
  UserName: string;
  FirstName: string;
  LastName: string;
  Email: string;
  // Password: string;
  // Role: string;
  constructor() {
    this.UserName = 'prabuddhika96';
    this.FirstName = 'Prabuddhika';
    this.Email = 'prabuddhika@gmail.com';
    this.LastName = 'Mayurapaksha';
    // this.Password = '';
  }
}
