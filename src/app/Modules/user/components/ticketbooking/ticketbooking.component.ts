import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {

  ticketTypeList: any = ['Business', 'Normal']

  mealList:any =['NON VEG','VEG','BOTH']

  genderList:any =['Male','Female','Other']

  constructor() { }

  ngOnInit(): void {
  }

}
