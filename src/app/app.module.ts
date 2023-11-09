import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { HomeComponent } from './main/home/home.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SpendingComponent } from './main/spending/spending.component';
import { AnalyticsComponent } from './main/analytics/analytics.component';
import { SettingsComponent } from './main/settings/settings.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { CashFlowComponent } from './main/cash-flow/cash-flow.component';
import { EntryComponent } from './main/cash-flow/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    SpendingComponent,
    AnalyticsComponent,
    SettingsComponent,
    BreadcrumbsComponent,
    CashFlowComponent,
    EntryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
