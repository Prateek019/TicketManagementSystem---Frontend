import { Injectable } from '@angular/core';
import { Ticket } from '../Ticket.model';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import {Http, Response, Headers, RequestOptions} from '@angular/http'


import {HttpParams} from '@angular/common/http'
//import 'rxjs-compat/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  allTickets:Ticket[];

  baseURL:string
  getAllTicketURL:string
  getTicketbyIdURL:string
  deleteTicketURL:string
  updateticketURL:string
  createTicketURL:string

  constructor(private http:Http) { 
    this.baseURL="http://localhost:9009";
    this.getAllTicketURL="http://localhost:9009/getall";
    this.createTicketURL="http://localhost:9009/create"        
    this.getTicketbyIdURL="http://localhost:9009/getkt";
    this.deleteTicketURL="http://localhost:9009/delete";
    this.updateticketURL="http://localhost:9009/update";
  }

getAllTickets():Observable<Ticket[]>{
/*  return this.http.get(this.getAllTicketURL)
  .map(this.extractData)
  .catch(this.handleError);
  */
 return this.http.get(this.getAllTicketURL)
     .map(this.extractData);
 
}

private extractData(res: Response){
  return res.json();

 }
 private handleError(error: Response){
 return  "Error Aa gya"+error.status;
 }

 addTicket(tkt:Ticket):Promise<Ticket>{
   
  let headers = new Headers({'content-Type' : 'application/json'});
  let options = new RequestOptions({headers:headers});
  
  return this.http.post(this.createTicketURL,tkt , options).toPromise()
  .then(this.extractData)
  .catch(this.handleError);

}
deleteTicket(id):Observable<Response>{
  this.deleteTicketURL=this.deleteTicketURL+"/"+id;
    return this.http.delete(this.deleteTicketURL);
}
searchTkt(id:number):Observable<Ticket>{
  //this.getTicketbyIdURL=this.getAllTicketURL+"/"+id;
  return this.http.get(this.getTicketbyIdURL+"/"+id)
  .map(this.extractData);

}
updateTicket(id:number){
  this.http.put(this.updateticketURL+"/"+id).map(this.extractData);
}

}
