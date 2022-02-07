import { Component, OnInit } from '@angular/core';
import { Tickets } from 'src/app/Model/Tickets';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  tickets: Tickets[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getHistory().subscribe((data: Tickets[])=>{
      this.tickets = data;
      console.log(this.tickets);
    })  
  }

}
