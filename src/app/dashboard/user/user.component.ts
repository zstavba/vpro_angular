import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserSidebarComponent } from '../components/user-sidebar/user-sidebar.component';
import { UserAvatarComponent } from '../components/user-avatar/user-avatar.component';
import { LineProductionComponent } from '../components/line-production/line-production.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterOutlet,
    UserSidebarComponent,
    UserAvatarComponent,
    LineProductionComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
