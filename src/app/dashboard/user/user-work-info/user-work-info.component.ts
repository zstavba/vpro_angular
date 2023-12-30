import { Component } from '@angular/core';
import { CalendarComponent } from '../../components/calendar/calendar.component';

@Component({
  selector: 'app-user-work-info',
  standalone: true,
  imports: [
    CalendarComponent
  ],
  templateUrl: './user-work-info.component.html',
  styleUrl: './user-work-info.component.scss'
})
export class UserWorkInfoComponent {

}
