import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { HistoryComponent } from './components/history/history.component';
import { SearchComponent } from './components/search/search.component';
import { SearchresultsComponent } from './components/searchresults/searchresults.component';
import { TicketbookingComponent } from './components/ticketbooking/ticketbooking.component';
import { TicketdetailsComponent } from './components/ticketdetails/ticketdetails.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

const routes: Routes = [
 { 
   path: '', component: UserDashboardComponent,
    children: [
      { path: 'search', component: SearchComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'searchresults', component: SearchresultsComponent },
      { path: 'bookticket', component: TicketbookingComponent },
      { path: 'ticketview', component: TicketdetailsComponent },
      { path: '', redirectTo: '/user/search', pathMatch: 'full' },
    ],
  },
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
