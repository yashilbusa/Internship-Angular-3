import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  cities = ['Jamnagar', 'Rajkot', 'Ahmedabad', 'Surat', 'Morbi', 'Dwarka'];
  
  save(form:any){
    if(form.valid){
      console.log(form.value);
    }
    form.reset();
  }
}
