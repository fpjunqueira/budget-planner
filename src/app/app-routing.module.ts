import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './main/home/home.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SpendingComponent } from './main/spending/spending.component';
import { AnalyticsComponent } from './main/analytics/analytics.component';
import { SettingsComponent } from './main/settings/settings.component';
import { LabelsComponent } from './main/labels/labels.component';

const routes: Routes = [
  // TODO: page not found
  // TODO: match-full path
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        canActivateChild: [authGuard],
        path: 'flow',
        loadChildren: () =>
          import('./main/cash-flow/cash-flow.module').then(
            (m) => m.CashFlowModule
          ),
      },
      {
        path: 'labels',
        component: LabelsComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivateChild: [authGuard],
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'spending',
        component: SpendingComponent,
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
