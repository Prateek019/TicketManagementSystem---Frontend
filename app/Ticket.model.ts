import { currentStatus } from "./Status.enum";

export class Ticket {
    private tktId:number
    private raisedBy:string
    private createdDate:string
    private assignedTo:string
    private subject:string
    private description:string
    private cs:currentStatus

    constructor(){
        
    }
    /*constructor(tktId:number, raisedBy:string, createdDate:string, assignedTo:string, subject:string, description:string, cs:currentStatus){
        this.tktId=tktId
        this.raisedBy=raisedBy
        this.createdDate=createdDate
        this.assignedTo=assignedTo
        this.subject=subject
        this.description=description
        this.cs=cs
    }*/
}
