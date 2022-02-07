import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credintials } from '../Model/Credintials';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userRegistration } from '../Model/userRegistration';

const BASE_API='http://localhost:8085/api/flight/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

 
  constructor(private http:HttpClient,private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  // login(credintials:Credintials): Observable<any> {
  //   if (credintials.username === 'admin@gmail.com' && credintials.password === 'admin123') {
  //     this.setToken('abcdefghijklmnopqrstuvwxyz');
  //     return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }
  login(credintials:Credintials):Observable<any>{
    console.log(credintials);
    return this.http.post(BASE_API+'/authenticate',credintials,httpOptions)
  }  

  register(userReg:userRegistration):Observable<any>{
    console.log(userReg);
    return this.http.post(BASE_API+'/createuser',userReg,httpOptions)
  }
}