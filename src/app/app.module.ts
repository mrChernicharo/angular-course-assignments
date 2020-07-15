import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './successAlert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { DangerAlertComponent } from './danger-alert/danger-alert.component'

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    AlertBoxComponent,
    DangerAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
