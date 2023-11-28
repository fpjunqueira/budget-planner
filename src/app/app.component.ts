import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './auth/user';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  authenticated$: Observable<boolean>;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.authenticated$ = this.auth.authenticated();
  }
}
