import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sendRouteNames, state$ } from '@eyepax/utility';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { LoginRequest } from '../login-request';
// import { MatDialog } from '@angular/material/dialog';
// import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  // template: ` <p>login works!</p> `,
  templateUrl: 'login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  // constructor() {}

  // editProfileForm = new FormGroup({
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
  //     this.subscription = state$.subscribe((data: any) => {
  //       console.log('Angular rxjs->', data);
  //     });
  //     state$.next({ data: 'token' });
  //     this.subscription.unsubscribe();
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
  issubmit: boolean = false;

  subscription!: Subscription;
  ngOnInit() {
    console.log('Angular ->', sendRouteNames());
    this.subscription = state$.subscribe((data: any) => {
      console.log('Angular rxjs->', 'token');
    });
  }
  // ngOnDestroy() {
  //   // state$.next({ data: 'Angular Data' });
  //   // this.subscription.unsubscribe();
  // }

  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    console.log('Login object:', this.loginObj);
    this.issubmit = true;
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('logintoken')}`);

    this.http
      .post<any>('https://localhost:7036/api/Authentication', this.loginObj)
      .subscribe(
        (response: any) => {
          console.log('Response from server:', response);
          if (response && response.token) {
            // this.subscription = state$.subscribe((data: any) => {
            //   console.log('Angular rxjs->', data);
            // });
            alert('Login successful');
            localStorage.setItem('logintoken', response.token);
            console.log('response.token:', response.token);
            this.router.navigateByUrl('/dashboard');
          }
        },
        (error: any) => {
          alert(error.error.title + ': The User doesnt exist');
          console.log('error:', error);
          this.router.navigateByUrl('/login');
        }
      );
  }
}

export class Login {
  UserName: string;
  Password: string;

  constructor() {
    this.UserName = '';
    this.Password = '';
  }
}
