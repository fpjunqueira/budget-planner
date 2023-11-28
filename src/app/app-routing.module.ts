import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './main/home/home.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SpendingComponent } from './main/spending/spending.component';
import { AnalyticsComponent } from './main/analytics/analytics.component';
import { SettingsComponent } from './main/settings/settings.component';

const routes: Routes = [
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
        path: 'home',
        component: HomeComponent,
        canActivateChild: [authGuard],
      },
    ],
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
