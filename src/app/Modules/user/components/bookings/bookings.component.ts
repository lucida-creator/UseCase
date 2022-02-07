import { Component, OnInit } from '@angular/core';
import { Tickets } from 'src/app/Model/Tickets';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  tickets: Tickets[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllBookings().subscribe((data: Tickets[])=>{
      this.tickets = data;
      console.log(this.tickets);
    })  
  }

}
