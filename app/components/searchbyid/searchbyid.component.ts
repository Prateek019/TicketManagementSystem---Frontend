import { Component, OnInit } from '@angular/core';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import { Ticket } from 'src/app/Ticket.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbyid',
  templateUrl: './searchbyid.component.html',
  styleUrls: ['./searchbyid.component.css']
})
export class SearchbyidComponent implements OnInit {
  tkt:Ticket;
  
  constructor(private ticketService:TicketServiceService,private router:Router) {

   }
   getTicket(id:number){
     console.log(id);
    this.ticketService.searchTkt(id).subscribe(
      data => this.tkt=data
    )
    
   // console.log(this.ticket);
  }

  deleteTicket(id:number){
    this.ticketService.deleteTicket(id).subscribe(
      resp=>{
        if(resp.ok){
           this.router.navigate(['display']);    
        }
      }
    )
  }

  ngOnInit() {
    this.tkt=new Ticket();
  }


}
