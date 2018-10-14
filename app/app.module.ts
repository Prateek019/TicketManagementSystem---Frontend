import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { HttpModule } from '@angular/http';
import { CreateticketComponent } from './components/createticket/createticket.component';
import {FormsModule} from '@angular/forms';
import { SearchbyidComponent } from './components/searchbyid/searchbyid.component';
import { UpdateTicketComponent } from './components/update-ticket/update-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CreateticketComponent,
    SearchbyidComponent,
    UpdateTicketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
