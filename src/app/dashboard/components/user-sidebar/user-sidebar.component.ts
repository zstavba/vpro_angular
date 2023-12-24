import { Component } from '@angular/core';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { UserActivityComponent } from '../user-activity/user-activity.component';
import { UserUploadedFilesComponent } from '../user-uploaded-files/user-uploaded-files.component';

@Component({
  selector: 'profile-menu',
  standalone: true,
  imports: [
    UserAvatarComponent,
    UserMenuComponent,
    UserActivityComponent,
    UserUploadedFilesComponent
  ],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.scss'
})
export class UserSidebarComponent {

}
