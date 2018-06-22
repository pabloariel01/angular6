import { Component, OnInit, Input } from '@angular/core';

import {Legajo} from "../legajo"
@Component({
  selector: 'app-legajo-detalle',
  templateUrl: './legajo-detalle.component.html',
  styleUrls: ['./legajo-detalle.component.scss']
})
export class LegajoDetalleComponent implements OnInit {
  @Input() legajo: Legajo;

  // pdfSrc: string = 'https://www.adobe.com/be_en/active-use/pdf/Alice_in_Wonderland.pdf';
  pdfSrc: string = '/assets/pdf/openstack-install-guide-essex.pdf';
  
  constructor() { }

  ngOnInit() {
  }

}
