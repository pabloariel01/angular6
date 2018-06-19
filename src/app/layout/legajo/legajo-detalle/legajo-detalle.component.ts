import { Component, OnInit, Input } from '@angular/core';

import {Legajo} from "../legajo"
@Component({
  selector: 'app-legajo-detalle',
  templateUrl: './legajo-detalle.component.html',
  styleUrls: ['./legajo-detalle.component.scss']
})
export class LegajoDetalleComponent implements OnInit {
  @Input() legajo: Legajo;

  constructor() { }

  ngOnInit() {
  }

}
