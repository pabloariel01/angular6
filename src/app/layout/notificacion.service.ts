import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  notificacion:string[]=[];

  addNotificacion(mensaje:string){
    this.notificacion.push(mensaje)
  }
  limpiar(){
    this.notificacion=[];
  }
  constructor() { }
}
