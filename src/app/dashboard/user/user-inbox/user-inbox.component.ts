import { Component } from '@angular/core';
import { UiHomeComponent } from './ui-home/ui-home.component';
import { UiReadableComponent } from './ui-readable/ui-readable.component';
import { UiSnedComponent } from './ui-sned/ui-sned.component';
import { UiTrashComponent } from './ui-trash/ui-trash.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UiSpamComponent } from './ui-spam/ui-spam.component';
import { InboxSendMessageComponent } from '../../components/inbox-send-message/inbox-send-message.component';

@Component({
  selector: 'app-user-inbox',
  standalone: true,
  imports: [
    UiHomeComponent,
    UiReadableComponent,
    UiSnedComponent,
    UiTrashComponent,
    UiSpamComponent,
    InboxSendMessageComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './user-inbox.component.html',
  styleUrl: './user-inbox.component.scss'
})
export class UserInboxComponent {

}
