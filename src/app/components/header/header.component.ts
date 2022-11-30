import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  handleMenu = () => {
    const menu = document.getElementById("menu-icon")
    const menuItems = document.getElementById("menu-controler")
    if (menuItems) {
      menuItems.classList.toggle("menu-controler")
    }
  }
}
