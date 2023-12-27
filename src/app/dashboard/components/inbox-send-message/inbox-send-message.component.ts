import { Component } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
  selector: 'inbox-send-message',
  standalone: true,
  imports: [
    EditorModule
  ],
  templateUrl: './inbox-send-message.component.html',
  styleUrl: './inbox-send-message.component.scss'
})
export class InboxSendMessageComponent {

}
