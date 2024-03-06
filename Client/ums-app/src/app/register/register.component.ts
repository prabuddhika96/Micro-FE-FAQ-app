import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    // Check if 'logintoken' exists in local storage
    const token = localStorage.getItem('logintoken');
    if (token) {
      this.router.navigate(['/faq-app']);
    }
  }

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
      .post<any>(`${environment.BACKEND_SERVER}/UserAPI`, this.signupObj)
      .subscribe(
        (response: any) => {
          console.log('Response from server:', response);
          if (response) {
            // alert('signUp successful');
            this.router.navigateByUrl('/');
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
