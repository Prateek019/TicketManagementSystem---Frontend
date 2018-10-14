import { Component, OnInit } from '@angular/core';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/ticket.model';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  ticket:Ticket
  id:number;
    constructor(private ticketService:TicketServiceService,private router:Router, info:ActivatedRoute) { 
      info.params.subscribe(params=>{this.id=params["id"]});
    
      if(this.id!=null){
        this.ticketService.searchTkt(this.id).subscribe(
          data => this.ticket=data
        );
  
      }
      
    
    }
    updateTicket(){
      this.ticketService.updateTicket(this.ticket);
      this.router.navigate(['display']);
    }


  

  ngOnInit() {
    this.ticket=new Ticket();
  }

}
