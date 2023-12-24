import { Component } from '@angular/core';
import { UserAvatarComponent } from '../../components/user-avatar/user-avatar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [
    RouterLink,
    UserAvatarComponent
  ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss'
})
export class UserHomeComponent {

}
