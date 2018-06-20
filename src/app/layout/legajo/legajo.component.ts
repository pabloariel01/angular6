import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import {Legajo} from "./legajo";

import {LegajoService} from "../legajo.service";

@Component({
  selector: 'app-legajo',
  templateUrl: './legajo.component.html',
  styleUrls: ['./legajo.component.scss'],
  animations: [routerTransition()]
})
export class LegajoComponent implements OnInit {
  legajos:Legajo[];
  selectedLegajo:Legajo;

  onSelect(legajo:Legajo):void{
    this.selectedLegajo=legajo;
  }

  getLegajos():void{
    this.legajoService.getLegajos()
      .subscribe(legajo=>this.legajos=legajo);
  }

  constructor(
      private legajoService:LegajoService
  ) { }

  ngOnInit() {
    this.getLegajos();
  }

}
