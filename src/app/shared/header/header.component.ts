import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  collapsed = true;
  faBars = faBars;
  userName: string;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth.getUser().subscribe((user => this.userName = user?.email));
  }

  sideNavToggle() {
    this.collapsed = !this.collapsed;
    this.sideNavToggled.emit(this.collapsed);
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
