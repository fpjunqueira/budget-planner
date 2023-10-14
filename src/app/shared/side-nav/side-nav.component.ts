import { Component, Input } from '@angular/core';
import { NavItem, navData } from './side-nav-data';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  @Input() sideNavCollapsed: boolean = false;
  navItems: NavItem[] = navData();
}
