import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './view/login/login.component';
import {MainComponent} from './view/main/main.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {ClientDetailsComponent} from './view/client-details/client-details.component';
import {FilingCaseComponent} from './view/filing-case/filing-case.component';
import {CustomerOrderComponent} from './view/customer-order/customer-order.component';




const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'client-details',
        component: ClientDetailsComponent
      },
      {
        path: 'filing-case',
        component: FilingCaseComponent
      }

    ]
  },
  {
    path: 'customerorder',
    component: CustomerOrderComponent,
  },

  {path: '', pathMatch: 'full', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
