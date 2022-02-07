import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userRegistration } from 'src/app/Model/userRegistration';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  userReg: userRegistration = new userRegistration();

  onSubmit(): void {
    console.log(this.userReg);
    if (this.registerForm.valid) {
      this.auth.register(this.userReg).subscribe(
        (result) => {
          console.log(this.userReg)
          this.gotoLogin();
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
  gotoLogin() {
    this.router.navigate(['/login'])
  }
}
