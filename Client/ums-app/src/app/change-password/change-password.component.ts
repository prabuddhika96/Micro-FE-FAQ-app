import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { sendRouteNames } from '@eyepax/utility';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  issubmit: boolean = false;

  subscription!: Subscription;

  changePwObj: ChangePassword;

  constructor(private http: HttpClient, private router: Router) {
    this.changePwObj = new ChangePassword();

    const token = localStorage.getItem('logintoken');
    if (!token) {
      this.router.navigateByUrl(sendRouteNames().mainApp);
    }
  }

  handleChangePassword() {
    console.log('change pw object:', this.changePwObj);
    this.issubmit = true;

    if (
      this.changePwObj?.currentPassword === '' ||
      this.changePwObj?.newPassword === '' ||
      this.changePwObj?.confirmPassword === ''
    ) {
      // alert('All fields are required');
      return;
    }

    if (this.changePwObj?.newPassword !== this.changePwObj?.confirmPassword) {
      alert(
        'The new password does not match the confirm password. Please check again.'
      );
      return;
    }
  }
}

export class ChangePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;

  constructor() {
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }
}
