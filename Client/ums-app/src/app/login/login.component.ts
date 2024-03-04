import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginRequest } from '../login-request';
// import { MatDialog } from '@angular/material/dialog';
// import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  // template: ` <p>login works!</p> `,
  templateUrl: 'login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor() {}

  editProfileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  errorMessages: any = {}; // Initialize errorMessages as an empty object

  handleSubmit(event: Event) {
    event.preventDefault();
    // Clear previous error messages
    this.errorMessages = {};

    if (this.editProfileForm.valid) {
      console.log(this.editProfileForm.value);
    } else {
      this.editProfileForm.markAllAsTouched();

      // Iterate through each form control to check for validation errors
      Object.keys(this.editProfileForm.controls).forEach((key) => {
        const controlErrors = this.editProfileForm.get(key)?.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach((keyError) => {
            switch (keyError) {
              case 'required':
                this.errorMessages[key] = `${key} is required`;
                break;
              case 'email':
                this.errorMessages[key] = `${key} must be a valid email`;
                break;
              default:
                break;
            }
          });
        }
      });
    }
  }

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
}
