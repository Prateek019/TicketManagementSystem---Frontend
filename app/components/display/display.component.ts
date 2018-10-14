import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Ticket.model';
import { TicketServiceService } from 'src/app/services/ticket-service.service';
import { Router } from '@angular/router';
//import { } from 'src/app/components/searchbyid/searchbyid.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  allTickets:Ticket[];  

  constructor(private tktServ:TicketServiceService, private router:Router) { 
    this.getAllticket();

  }
  getAllticket(){
    this.tktServ.getAllTickets().subscribe(
      data => this.allTickets=data
    )
  }

  deleteTicket(id:number){
    console.log(id);
     this.tktServ.deleteTicket(id).subscribe(
       resp=>{
         if(resp.ok)
         {
          this.router.navigate(['display']);
         }
       }
     );
   }
   
   updateTicket(id:number){
    
     this.router.navigate(['update-ticket/'+id])
     /*this.tktServ.updateTicket(id).subscribe(
       resp=>{
         if(resp.ok)
         {
          this.router.navigate(['display']);
         }
       }
     )*/
   }



  ngOnInit() {
  }

}
