import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var jQuery: any; 

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  openUserMenu = () => {
   jQuery('#DropdownUserMenu').fadeToggle()
  }

}
