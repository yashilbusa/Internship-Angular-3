import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})

export class ReactiveFormComponent {

  regForm!: FormGroup;
  constructor() { }

  ngOnInit() {

    this.regForm = new FormGroup({
      fullname:new FormControl(),
      emailadd:new FormControl(),
      phoneno:new FormControl(),
      yourcity:new FormControl()
    });
  }

  register(){
    console.log(this.regForm.value);
    this.regForm.reset();
  }

}
