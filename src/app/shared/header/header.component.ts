import { Component, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
// import { User } from 'src/app/auth/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // user$: Observable<User>;
  authenticated$: Observable<boolean>;

  @Output() sideNavToggled = new EventEmitter<boolean>();
  collapsed = true;
  faBars = faBars;

  sideNavToggle() {
    this.collapsed = !this.collapsed;
    this.sideNavToggled.emit(this.collapsed);
  }
}
