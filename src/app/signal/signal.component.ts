import { JsonPipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})

export class SignalComponent {
  
  counter = signal(0);

  username = signal('yashilbusa');

  fruits = signal(["Apple","Pineple","Mango"])

  employeeData = signal({
    companyName:"InnovateMR",
    role:"Software Engineer Intern"
  });

  increase(){
    // this.counter.update(c => c + 1)
    this.counter.set(this.counter() + 1)
  }

  reset(){
    this.counter.set(0)
  }

  constructor() {
    effect(()=>{
      console.log(`Value of Counter is ${this.counter()}`);
    })
  }
}
