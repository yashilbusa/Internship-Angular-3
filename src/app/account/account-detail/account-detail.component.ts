import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account-detail.component.html',
  styleUrl: './account-detail.component.css'
})
export class AccountDetailComponent {
  id: any 

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id')
}
}
