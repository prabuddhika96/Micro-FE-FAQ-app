import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css',
})
export class PopUpComponent {
  changePwForm = new FormGroup({
    currentPw: new FormControl('', Validators.required),
    newPw: new FormControl('', Validators.required),
    confirmPw: new FormControl('', [Validators.required]),
  });

  errorMessages: any = {};

  handleSubmit(event: Event) {
    event.preventDefault();
    // Clear previous error messages
    this.errorMessages = {};

    if (this.changePwForm.valid) {
      console.log(this.changePwForm.value);
    } else {
      this.changePwForm.markAllAsTouched();

      // Iterate through each form control to check for validation errors
      Object.keys(this.changePwForm.controls).forEach((key) => {
        const controlErrors = this.changePwForm.get(key)?.errors;
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
}
