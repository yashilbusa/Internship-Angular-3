import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      PassWord: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmPassWord: ['', [Validators.required]]
    });
  }

  register(){
    if (this.signupForm.valid) {
      console.log('Signup Successful', this.signupForm.value);
    }
  }
}