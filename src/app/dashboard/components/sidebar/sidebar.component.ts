import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
