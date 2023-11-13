import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { SpendingComponent } from './spending/spending.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';
import { CashFlowComponent } from './cash-flow/cash-flow.component';
import { EntryComponent } from './cash-flow/entry/entry.component';
import { EntryFormModalComponent } from './cash-flow/entry-form-modal/entry-form-modal.component';
import { EntryLabelComponent } from './cash-flow/entry-label/entry-label.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    MainComponent,
    SpendingComponent,
    AnalyticsComponent,
    SettingsComponent,
    CashFlowComponent,
    EntryComponent,
    EntryFormModalComponent,
    EntryLabelComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NgbModule,


  ]
})
export class MainModule { }
