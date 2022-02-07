import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedules } from 'src/app/Model/Schedules';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.component.html',
  styleUrls: ['./view-schedule.component.css']
})
export class ViewScheduleComponent implements OnInit {

  flightNumber!: number;
  schedule!: Schedules;

  constructor(
    private adminService:AdminService,
    private route:ActivatedRoute,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.flightNumber = this.route.snapshot.params['flightNumber'];
    this.adminService.findFlight(this.flightNumber).subscribe((schedule: Schedules)=>{
      this.schedule = schedule;
    });
  }
}
