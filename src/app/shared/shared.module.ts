import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, AppRoutingModule],
  exports: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
})
export class SharedModule {}
