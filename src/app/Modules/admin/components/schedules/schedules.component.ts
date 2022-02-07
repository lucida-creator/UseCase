import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedules } from 'src/app/Model/Schedules';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
  schedules: Schedules[] = [];

  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
    this.adminService.getAllSchedules().subscribe((data: Schedules[])=>{
      this.schedules = data;
      console.log(this.schedules);
    })  
  }

  deleteSchedule(flightNumber:number){
    this.adminService.deleteFlight(flightNumber).subscribe(res => {
         this.schedules = this.schedules.filter(item => item.flightNumber !== flightNumber);
         console.log('Flight deleted successfully!');
         this.router.navigate(['/admin'])
    })
  }
}
