import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PreventivesComponent } from './gmao/components/preventives/preventives.component';
import { LoginFormComponent } from './gmao/forms/login-form/login-form.component';
import { PreventiveFormComponent } from './gmao/forms/preventive-form/preventive-form.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MaterialModule } from './matreial/matreial.module';
import { ReactiveFormsModule } from '@angular/forms';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  entryComponents :[PreventiveFormComponent],


  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),FullCalendarModule,
    MaterialModule,ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PreventivesComponent,
    PreventiveFormComponent,
    LoginFormComponent,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
