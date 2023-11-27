import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import { CashFlowModule } from './cash-flow/cash-flow.module';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, MainComponent],
  imports: [
    MainRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
    SharedModule,
    CashFlowModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
