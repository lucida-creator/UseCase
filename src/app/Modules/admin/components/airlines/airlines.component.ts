import { Component, OnInit } from '@angular/core';
import { Airlines } from 'src/app/Model/Airlines';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {

  airlines: Airlines[] = [];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllAirlines().subscribe((data: Airlines[])=>{
      this.airlines = data;
      console.log(this.airlines);
    })  
  }

  deleteSchedule(name:string){
    this.adminService.deleteAirline(name).subscribe(res => {
         this.airlines = this.airlines.filter(item => item.name !== name);
         console.log('Airline deleted successfully!');
        this.refresh();
    })
  }

  refresh(): void {
    window.location.reload();
}

}
