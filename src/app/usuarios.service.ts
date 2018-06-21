import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable,of} from "rxjs";
import { map } from 'rxjs/operators';

import {Usuario} from './usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosUrl = 'api/users';  // URL to web api

  getUsers (): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl)
  }

  

  constructor(private http: HttpClient) { }
}
