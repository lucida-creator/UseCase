import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

const BASE_API='http://localhost:8085/api/flight/schedule';
const BASE_USER_API='http://localhost:8085/api/flight/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }

  getAllBookings(): Observable<any> {

    return this.http.get(BASE_API + '/search')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  bookTicket(): Observable<any> {
    return this.http.post(BASE_API + '/bookflight', JSON.stringify, httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  } 
  getTicket(): Observable<any> {

    return this.http.get(BASE_API + '/findticket/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getHistory(): Observable<any> {

    return this.http.get(BASE_API + '/findticket/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  cancelTicket(pnr:string): Observable<any> {
  
    return this.http.put(BASE_API + '/cancel'+pnr, httpOptions)
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
