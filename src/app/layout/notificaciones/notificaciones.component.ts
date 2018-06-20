import { Component, OnInit } from '@angular/core';
import {NotificacionService} from "../notificacion.service";
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent implements OnInit {

  constructor(
    public notificacionService:NotificacionService
  ) { }

  ngOnInit() {
  }

}
