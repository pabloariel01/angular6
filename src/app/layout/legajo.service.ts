import { Injectable } from '@angular/core';
import {Legajo} from "./legajo/legajo";

import {Observable,of} from "rxjs";
import {NotificacionService} from "./notificacion.service"
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LegajoService {
  private legajosUrl = 'api/legajos';  // URL to web api
  
  getLegajos():Observable<Legajo[]>{
     this.notifiacionservice.addNotificacion("legajos completados")
    return this.http.get<Legajo[]>(this.legajosUrl).pipe(
      tap(legajo=>this.log("carga de legajos")),
      catchError(this.handleError("getLegajos",[]))
    );
  }

  getLegajo(id:number):Observable<Legajo>{
    const url=`${this.legajosUrl}/${id}`;
    return this.http.get<Legajo>(url).pipe(
      tap(_=>this.log(`recibido id=${id}`)),
      catchError(this.handleError<Legajo>(`getLegajoid= ${id}`))
    )
  }

  searchLegajo(term:string):Observable<Legajo[]>{
    if(!term.trim()){
      return of([])
    }
    return this.http.get<Legajo[]>(`${this.legajosUrl}/?name=${term}`).pipe(
      tap(_=>this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Legajo[]>('searchLegajo',[]))
    )
  }

  private log(message: string) {
    this.notifiacionservice.addNotificacion('HeroService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  constructor(
    private http : HttpClient,
    private notifiacionservice:NotificacionService
  ) { }
}
