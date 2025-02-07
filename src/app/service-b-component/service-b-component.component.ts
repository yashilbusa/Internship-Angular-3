import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-service-b-component',
  standalone: true,
  imports: [],
  providers:[CounterService],
  templateUrl: './service-b-component.component.html',
  styleUrl: './service-b-component.component.css'
})
export class ServiceBComponentComponent {
  constructor(public cntservice:CounterService){}
}
