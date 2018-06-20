import { Injectable } from '@angular/core';
import {Legajo} from "./legajo/legajo";
import {LEGAJOS} from "./legajo/mock-legajo"

import {Observable,of} from "rxjs";
import {NotificacionService} from "./notificacion.service"


@Injectable({
  providedIn: 'root'
})
export class LegajoService {
  
  getLegajos():Observable<Legajo[]>{
    this.notifiacionservice.addNotificacion("legajos completados")
    return of(LEGAJOS);
  }
  constructor(
    private notifiacionservice:NotificacionService
  ) { }
}
