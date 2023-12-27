import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  ngOnInit(): void {
    
  }

  // Toggeling dropdown menu, based on the menu name. No matter where is the parrent and child selected !!!
  toggleSlideDropDownMenu = (menu_title: string): void => {
    $(`.${menu_title}`).slideToggle();
  }

}
