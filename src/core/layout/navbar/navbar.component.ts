import { Component, OnInit, HostListener } from '@angular/core';
import { NavItems } from '../../models/navitems.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems: NavItems[];
  menuSidebarDisplay: boolean;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.window.innerWidth > 1187 && this.menuSidebarDisplay === true) {
      this.menuSidebarDisplay = false;
    }
  }
  constructor() {
    this.menuSidebarDisplay = false;
  }

  ngOnInit() {
    this.menuItems = [{ 'id': 1, title: 'Men' },
    { 'id': 1, title: 'Women' },
    { 'id': 1, title: 'Home', link: '/home' },
    { 'id': 1, title: 'Admin', link: '/admin' },
    { 'id': 1, title: 'Admin Settings', link: 'admin/settings' }];
  }

}
