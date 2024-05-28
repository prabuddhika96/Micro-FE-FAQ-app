import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sendRouteNames, state$ } from '@eyepax/utility';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  // template: ` <p>login works!</p> `,
  templateUrl: 'login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  issubmit: boolean = false;
  subscription!: Subscription;
  loginObj: Login;

  ngOnInit(): void {
    // Check if 'logintoken' exists in local storage
    const token = localStorage.getItem('logintoken');
    if (token) {
      this.router.navigate(['/faq-app']);
    }
  }

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();

    const token = localStorage.getItem('logintoken');
    if (token) {
      this.router.navigateByUrl(sendRouteNames().mainApp);
    }
  }

  onLogin() {
    // console.log('Login object:', this.loginObj);
    this.issubmit = true;
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('logintoken')}`);

    this.http
      .post<any>(`${environment.BACKEND_SERVER}/Authentication`, this.loginObj)
      .subscribe(
        (response: any) => {
          if (response) {
            this.subscription = state$.subscribe(() => {});
            state$.next({ userToken: response?.token });

            localStorage.setItem('logintoken', response?.token);

            this.router.navigateByUrl(sendRouteNames().mainApp);
          }
        },
        (error: any) => {
          alert(error.error.title + ': The User doesnt exist');
          console.log('error:', error);
          this.router.navigateByUrl('/');
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
