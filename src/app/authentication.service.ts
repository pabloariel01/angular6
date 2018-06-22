import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from "rxjs";
import { map,tap,first } from 'rxjs/operators';

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
    return this.http.post<Usuario>(url,usr,httpOptions)
        
    // .pipe(tap(
    //   user => {
    //     if (user.password==usuario&&user.password==password){
    //       console.log(user)
    //   // login successful if there's a jwt token in the response
    //   // if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //   // }

    //     return user;
    //     }
    //  })
    
    // );
  }


  logout():void{
    localStorage.removeItem('currentUser');
  }

  constructor(private http: HttpClient) { }
}
