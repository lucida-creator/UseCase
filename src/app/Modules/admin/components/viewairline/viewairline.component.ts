import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airlines } from 'src/app/Model/Airlines';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-viewairline',
  templateUrl: './viewairline.component.html',
  styleUrls: ['./viewairline.component.css']
})
export class ViewairlineComponent implements OnInit {

  name!: string;
  airline!: Airlines;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];

    this.adminService.findAirline(this.name).subscribe((airline: Airlines) => {
      this.airline = airline;
    });
  }

}
