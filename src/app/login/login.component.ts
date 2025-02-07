import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    loginForm!: FormGroup;
    constructor(private fb:FormBuilder) { }
  
    ngOnInit() {
      this.loginForm = this.fb.group({
        Email:['',[Validators.required, Validators.email]],
        PassWord:['',[Validators.required, Validators.minLength(8)]]
      });
    }

    login(){
      console.log(this.loginForm.value);
      this.loginForm.reset();
    }
}
