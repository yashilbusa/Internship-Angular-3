import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})

export class ReactiveFormComponent {

  regForm:FormGroup | any;
  constructor() { }

  ngOnDestroy() {
    this.regForm = new FormGroup({
      id:new FormControl(),
      fullname:new FormControl(),
      emailadd:new FormControl(),
      phoneno:new FormControl()
    })
    
  }
}
