import { Component, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  collapsed = true;
  faBars = faBars;

  sideNavToggle() {
    this.collapsed = !this.collapsed;
    this.sideNavToggled.emit(this.collapsed);
  }
}
