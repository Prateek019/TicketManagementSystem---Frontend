import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TicketServiceService } from 'src/app/services/ticket-service.service';
import { Ticket } from 'src/app/Ticket.model';

@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.css']
})
export class CreateticketComponent implements OnInit {

  

  ticket:Ticket;

  constructor(private tktServ:TicketServiceService, private router: Router) {
   }


  saveTicket() {
    this.tktServ.addTicket(this.ticket);
    this.router.navigate(['display']);
  }

  ngOnInit() {
    this.ticket=new Ticket();  

  }

}
