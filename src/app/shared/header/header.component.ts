import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  collapsed = true;
  faBars = faBars;

  constructor(private auth: AuthService, private router: Router) {}

  sideNavToggle() {
    this.collapsed = !this.collapsed;
    this.sideNavToggled.emit(this.collapsed);
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
