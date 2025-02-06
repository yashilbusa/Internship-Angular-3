import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})

export class ReactiveFormComponent {

  regForm!: FormGroup;
  
  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    // this.regForm = new FormGroup({
    //   fullname:new FormControl('Yashil Busa'),
    //   email:new FormControl('yashilpatel1914@gmail.com'),
    //   phoneno:new FormControl('9726535839'),
    //   city:new FormControl('Jamnagar')
    // });

    this.regForm = this.fb.group({
      Name:['Yashil Busa'],
      Email:['yashilpatel1914@gmail.com'],
      PhoneNo:[9726535839],
      City:['Jamnagar']
    });

  }

  register(){
    console.log(this.regForm.value);
    this.regForm.reset();
  }

}
