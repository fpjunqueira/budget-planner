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
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
