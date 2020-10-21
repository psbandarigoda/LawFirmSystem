import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './view/main/main.component';
import {ClientDetailsComponent} from './view/client-details/client-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {CustomerOrderComponent} from './view/customer-order/customer-order.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import { FilingCaseComponent } from './view/filing-case/filing-case.component';
import {LoginComponent} from './view/login/login.component';
import {FileUploadModule} from 'ng2-file-upload';
import { TemplatesComponent } from './view/templates/templates.component';
import { ViewCaseComponent } from './view/view-case/view-case.component';
import { AppointmentComponent } from './view/appointment/appointment.component';
import { ViewCaseInDetailComponent } from './view/view-case-in-detail/view-case-in-detail.component';
import {PdfViewerModule} from "ng2-pdf-viewer";
import { ClientDetailsEditComponent } from './view/client-details-edit/client-details-edit.component';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ClientDetailsComponent,
    CustomerOrderComponent,
    ClientDetailsComponent,
    CustomerOrderComponent,
    DashboardComponent,
    FilingCaseComponent,
    LoginComponent,
    TemplatesComponent,
    ViewCaseComponent,
    AppointmentComponent,
    ViewCaseInDetailComponent,
    ClientDetailsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, FontAwesomeModule,
    HttpClientModule,
    FileUploadModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}), PdfViewerModule,
  ],
  providers: [
    HttpClient,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
