import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';
import { ServiceBComponentComponent } from "../service-b-component/service-b-component.component";

@Component({
  selector: 'app-service-a-component',
  standalone: true,
  imports: [ServiceBComponentComponent],
  templateUrl: './service-a-component.component.html',
  styleUrl: './service-a-component.component.css'
})
export class ServiceAComponentComponent {
  constructor(public cntservice:CounterService){}
}
