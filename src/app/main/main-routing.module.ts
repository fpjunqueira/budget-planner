import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: './',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'flow',
    loadChildren: () =>
      import('./cash-flow/cash-flow.module').then((m) => m.CashFlowModule),
  },

  // TODO: Refactor to modules
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  // },
  // {
  //   path: 'spending',
  //   component: SpendingComponent,
  // },
  // {
  //   path: 'analytics',
  //   component: AnalyticsComponent,
  // },
  // {
  //   path: 'settings',
  //   component: SettingsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
