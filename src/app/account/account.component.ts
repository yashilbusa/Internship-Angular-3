import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
    accounts = [
      {
          id: 1,
          name: 'Account 1',
      },
      {
          id: 2,
          name: 'Account 2',
      },
      {
          id: 3,
          name: 'Account 3',
      }
  ]
}
