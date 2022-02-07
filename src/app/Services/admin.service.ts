import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Airlines } from '../Model/Airlines';
import { Schedules } from '../Model/Schedules';


const BASE_API='http://localhost:8085/api/flight/admin/airline';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAllSchedules(): Observable<any> {

    return this.http.get(BASE_API + '/inventory/all/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findFlight(flightNumber:number): Observable<any> {
  
    return this.http.get(BASE_API + '/inventory/' + flightNumber)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  deleteFlight(flightNumber:number){
    return this.http.delete(BASE_API + '/inventory/delete/' + flightNumber, httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllAirlines(): Observable<any> {

    return this.http.get(BASE_API + '/all/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findAirline(name:string): Observable<any> {
  
    return this.http.get(BASE_API +"/"+ name)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }
  deleteAirline(name:string){
    return this.http.delete(BASE_API + '/delete/' + name, httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  createAirline(airline:Airlines): Observable<any> {
  
    return this.http.post(BASE_API + '/register', JSON.stringify(airline), httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 
  
  createSchedule(schedule:Schedules): Observable<any> {
  
    return this.http.post(BASE_API + '/addinventory', JSON.stringify(schedule), httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
