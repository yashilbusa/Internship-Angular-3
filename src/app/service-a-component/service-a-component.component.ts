import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-service-a-component',
  standalone: true,
  imports: [],
  templateUrl: './service-a-component.component.html',
  styleUrl: './service-a-component.component.css'
})
export class ServiceAComponentComponent {
  constructor(public cntservice:CounterService){}
}
