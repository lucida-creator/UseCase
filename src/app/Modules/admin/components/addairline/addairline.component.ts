import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {
  form!: FormGroup;
  

  constructor(
    private router: Router,
    private adminService: AdminService
  ) { }

  get f() {
    return this.form.controls;
  }
  ngOnInit(): void {
    this.form = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        logo: new FormControl('', Validators.required),
        contactAddress: new FormControl('', Validators.required),
        contactNumber: new FormControl('', Validators.required),
      }
    )
  }

  submit() {
    console.log(this.form.value);
    this.adminService.createAirline(this.form.value).subscribe((res: any) => {
      console.log('Airline created successfully!');
      this.router.navigateByUrl('admin/schedules');
    })
  }
}
