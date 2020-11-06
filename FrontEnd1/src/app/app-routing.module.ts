import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './view/login/login.component';
import {MainComponent} from './view/main/main.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {ClientDetailsComponent} from './view/client-details/client-details.component';
import {FilingCaseComponent} from './view/filing-case/filing-case.component';
import {CustomerOrderComponent} from './view/customer-order/customer-order.component';
import {TemplatesComponent} from './view/templates/templates.component';
import {ViewCaseComponent} from './view/view-case/view-case.component';
import {AppointmentComponent} from './view/appointment/appointment.component';
import {ViewCaseInDetailComponent} from "./view/view-case-in-detail/view-case-in-detail.component";
import {ClientDetailsEditComponent} from "./view/client-details-edit/client-details-edit.component";
import {ClientSummaryComponent} from "./view/client-summary/client-summary.component";
import {CaseSummaryComponent} from "./view/case-summary/case-summary.component";




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
        path: 'client-details-edit',
        component: ClientDetailsEditComponent
      },
      {
        path: 'filing-case',
        component: FilingCaseComponent
      },
      {
        path: 'view-case',
        component: ViewCaseComponent
      },
      {
        path: 'appointment',
        component: AppointmentComponent
      },
      {
        path: 'View-Case-In-Detail',
        component: ViewCaseInDetailComponent
      },
      {
        path: 'templates',
        component: TemplatesComponent
      },
      {
        path: 'clientSummary',
        component: ClientSummaryComponent
      },
      {
        path: 'caseSummary',
        component: CaseSummaryComponent
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
