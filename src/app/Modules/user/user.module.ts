import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { HistoryComponent } from './components/history/history.component';
import { UserheaderComponent } from './components/userheader/userheader.component';
import { UserfooterComponent } from './components/userfooter/userfooter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { TicketbookingComponent } from './components/ticketbooking/ticketbooking.component';
import { TicketdetailsComponent } from './components/ticketdetails/ticketdetails.component';



@NgModule({
  declarations: [
    UserDashboardComponent,
    SearchComponent,
    BookingsComponent,
    HistoryComponent,
    UserheaderComponent,
    UserfooterComponent,
    SearchresultsComponent,
    TicketbookingComponent,
    TicketdetailsComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
