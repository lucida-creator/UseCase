import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Credintials } from 'src/app/Model/Credintials';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenStorageService } from 'src/app/Services/token-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  result: any;
  
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string = '';

  constructor(private auth: AuthService, private router: Router, private tokenStorage:TokenStorageService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]],
      }
    );
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
  }
  credintials: Credintials = new Credintials();

  onSubmit(): void {
    if (this.loginForm.valid) {
    this.auth.login(this.credintials).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().role;
        
        if(data.role == "Admin"){
          this.router.navigate(['/admin'])
        }else{
          this.router.navigate(['/user'])
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  }
}
