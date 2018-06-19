import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import {Legajo} from "./legajo";
import {LEGAJOS} from "./mock-legajo";

@Component({
  selector: 'app-legajo',
  templateUrl: './legajo.component.html',
  styleUrls: ['./legajo.component.scss'],
  animations: [routerTransition()]
})
export class LegajoComponent implements OnInit {
  legajos=LEGAJOS; 
  selectedLegajo:Legajo;

  onSelect(legajo:Legajo):void{
    this.selectedLegajo=legajo;
  }

  constructor() { }

  ngOnInit() {
  }

}
