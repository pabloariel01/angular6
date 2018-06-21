import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from "rxjs";
import { map,tap } from 'rxjs/operators';

import {Usuario} from './usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private usuariosUrl = 'api/users/';  // URL to web api

  login (usuario:string,pssw:string,id:number): Observable<Usuario>{
    const url=`${this.usuariosUrl}/${id}`;
    console.log(usuario,pssw)
    return this.http.get<Usuario>(url)
    .pipe(tap(user => {
      console.log(user)
      // login successful if there's a jwt token in the response
      // if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
      // }

      return user;
     }));
  }


  logout():void{
    localStorage.removeItem('currentUser');
  }

  constructor(private http: HttpClient) { }
}
