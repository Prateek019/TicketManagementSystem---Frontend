import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { CreateticketComponent } from './components/createticket/createticket.component';
import { SearchbyidComponent } from './components/searchbyid/searchbyid.component';
import { UpdateTicketComponent } from './components/update-ticket/update-ticket.component';

const routes: Routes = [
  {path:"", redirectTo:"root",pathMatch:"full"},
  {path:"display", component:DisplayComponent},
  {path:"createticket", component:CreateticketComponent},
  {path:"searchbyid", component:SearchbyidComponent},
  {path:"update-ticket/:id", component:UpdateTicketComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
