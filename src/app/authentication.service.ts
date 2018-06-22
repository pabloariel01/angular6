import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

import {Usuario} from './usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private usuariosUrl = 'http://200.32.52.6:8081/login';  // 

  login (usuario:string,password:string): Observable<Usuario>{
    const url=`${this.usuariosUrl}`;
    const usr={
      "username": usuario,
      "password": password
    };
    // console.log(usuario,pssw)
    return this.http.post<any>(url,usr,httpOptions)
    .pipe(
      tap(
        credentials=>{
          localStorage.setItem('credentials',JSON.stringify(credentials))
          localStorage.setItem('isLoggedin', 'true');
        }
      ),
      catchError(this.handleError('login',{}))

    )
        
 
  }


  logout():void{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('credentials');
  }

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
