import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { faClose, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  collapsed = true;
  navData = navbarData;
  faCoffee = faCoffee;
  faClose = faClose;
}
