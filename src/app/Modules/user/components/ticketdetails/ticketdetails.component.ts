import { Component, OnInit } from '@angular/core';
import { Tickets } from 'src/app/Model/Tickets';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-ticketdetails',
  templateUrl: './ticketdetails.component.html',
  styleUrls: ['./ticketdetails.component.css']
})
export class TicketdetailsComponent implements OnInit {

  tickets: Tickets[] = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getTicket().subscribe((data: Tickets[])=>{
      this.tickets = data;
      console.log(this.tickets);
    })  
  }

}
