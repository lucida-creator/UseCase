import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { AirlinesComponent } from './components/airlines/airlines.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DiscountsComponent } from './components/discounts/discounts.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AddscheduleComponent } from './components/addschedule/addschedule.component';
import { AddairlineComponent } from './components/addairline/addairline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewScheduleComponent } from './components/view-schedule/view-schedule.component';
import { ViewairlineComponent } from './components/viewairline/viewairline.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AirlinesComponent,
    AboutComponent,
    DiscountsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ReportsComponent,
    SchedulesComponent,
    AddscheduleComponent,
    AddairlineComponent,
    ViewScheduleComponent,
    ViewairlineComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[
    DatePipe
  ]
})
export class AdminModule { }
