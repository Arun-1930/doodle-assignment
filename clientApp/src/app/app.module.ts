import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlotsComponent } from './slots/slots.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListslotComponent } from './listslot/listslot.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker'

@NgModule({
  declarations: [
    AppComponent,
    SlotsComponent,
    ListslotComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatNativeDateModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
