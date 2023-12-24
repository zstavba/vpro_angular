import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'user-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss'
})
export class UserMenuComponent {

}
