import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {
  form!: FormGroup;
  citiesList: any = ['Hyderabad', 'Pune', 'Mumbai', 'Chennai', 'Noida']
  scheduleDaysList: any = ['WEEKENDS', 'DAILY', 'WEEKDAYS']
  mealList: any = ['NON VEG', 'VEG', 'BOTH']
  startDateSelected: any;
  endDateSelected: any;


  constructor(
    private adminService: AdminService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      flightNumber: new FormControl('', Validators.required),
      airline: new FormControl('', Validators.required),
      startDateTime: new FormControl('', Validators.required),
      endDateTime: new FormControl('', Validators.required),
      scheduledDays: new FormControl('', Validators.required),
      instrumentUsed: new FormControl('', Validators.required),
      totalBCSeats: new FormControl('', Validators.required),
      totalNBCSeats: new FormControl('', Validators.required),
      bCost: new FormControl('', Validators.required),
      nCost: new FormControl('', Validators.required),
      noOfRows: new FormControl('', Validators.required),
      mealsType: new FormControl('', Validators.required),
      fromPlace: new FormControl('', Validators.required),
      toPlace: new FormControl('', Validators.required)
    });
  }



  get f() {
    return this.form.controls;
  }


  submit() {
    console.log(this.form.value);
    let date: Date = new Date(this.startDateSelected)
    console.log(date);
    this.adminService.createSchedule(this.form.value).subscribe((res: any) => {
      console.log('Schedule created successfully!');
      this.router.navigateByUrl('admin/schedule');
    })
  }
}
