import { Injectable } from '@angular/core';
import {Recibo} from "./recibos/recibo"

import {Observable,of} from "rxjs";
import {NotificacionService} from "./notificacion.service"
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecibosService {
  recibosUrl="api/recibos";

  constructor(
    private http : HttpClient,
    private notifiacionservice:NotificacionService
  ) { }

  getRecibos():Observable<Recibo[]>{
    return this.http.get<Recibo[]>(this.recibosUrl)
    .pipe(
      tap(recibo=>console.log("carga de recibos")),
      catchError(this.handleError("getRecibos",[]))
    )
  }

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
