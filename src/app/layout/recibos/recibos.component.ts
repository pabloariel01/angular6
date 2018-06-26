import { Component, OnInit } from '@angular/core';
import {Recibo} from './recibo';
import {RecibosService} from "../recibos.service";

import { routerTransition } from '../../router.animations';


@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrls: ['./recibos.component.scss'],
  animations: [routerTransition()]
})

export class RecibosComponent implements OnInit {

  constructor(
    private reciboService:RecibosService
  ) { }

  recibos:Recibo[];
  filter: Recibo = new Recibo();

  getRecibos():void{
    this.reciboService.getRecibos()
      .subscribe(recibos=>this.recibos=recibos)
  }

  ngOnInit() {
    this.getRecibos()
  }

}
