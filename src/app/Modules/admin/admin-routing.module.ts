import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddairlineComponent } from './components/addairline/addairline.component';
import { AddscheduleComponent } from './components/addschedule/addschedule.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AirlinesComponent } from './components/airlines/airlines.component';
import { DiscountsComponent } from './components/discounts/discounts.component';
import { HomeComponent } from './components/home/home.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { ViewScheduleComponent } from './components/view-schedule/view-schedule.component';
import { ViewairlineComponent } from './components/viewairline/viewairline.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'schedules', component: SchedulesComponent },
      { path: 'airlines', component: AirlinesComponent },
      { path: 'discounts', component: DiscountsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'addschedule', component: AddscheduleComponent },
      { path: 'addairline', component: AddairlineComponent },
      { path: 'viewschedule/:flightNumber', component: ViewScheduleComponent },
      { path: 'viewairline/:name', component: ViewairlineComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
