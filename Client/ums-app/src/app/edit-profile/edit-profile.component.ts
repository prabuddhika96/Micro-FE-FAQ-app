import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
// import { getData, sendRouteNames, state$ } from '@eyepax/utility';
import { environment } from '../../environments/environment';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule, CommonModule],
  templateUrl: 'edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  schemas: [],
})
export class EditProfileComponent {
  editProfileObj!: EditProfile;
  issubmit: boolean = false;
  decoded: any = '';

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('logintoken');

    if (token) {
      this.decoded = jwtDecode(token);
      // console.log(this.decoded);
    }

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('logintoken')}`
    );
    this.http
      .get<any>(
        `${environment.BACKEND_SERVER}/UserAPI/${this.decoded?.UserId}`,
        {
          headers,
        }
      )
      .subscribe((response: any) => {
        // console.log('Response from server:', response);
        if (response) {
          this.editProfileObj = new EditProfile(
            response?.userName,
            response?.firstName,
            response?.lastName,
            response?.email
          );
        }
        (error: any) => {
          this.router.navigateByUrl('/');
        };
      });
  }

  handleEditProfile() {
    console.log('Login object:', this.editProfileObj);
    this.issubmit = true;

    const token = localStorage.getItem('logintoken');

    if (token) {
      this.decoded = jwtDecode(token);
      // console.log(this.decoded);
    }

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('logintoken')}`
    );

    this.http
      .put<any>(
        `${environment.BACKEND_SERVER}/UserAPI/${this.decoded?.UserId}`,
        this.editProfileObj,
        {
          headers,
        }
      )
      .subscribe((response: any) => {
        console.log('Response from server:', response);
        if (response) {
        }
        (error: any) => {
          this.router.navigateByUrl('/');
        };
      });
  }
}

export class EditProfile {
  UserName: string;
  FirstName: string;
  LastName: string;
  Email: string;

  constructor(
    userName: string,
    firstName: string,
    lastName: string,
    email: string
  ) {
    this.UserName = userName;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Email = email;
  }
}
