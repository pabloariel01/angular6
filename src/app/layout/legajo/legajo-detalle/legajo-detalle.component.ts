import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import {Legajo} from "../legajo"
import { LegajoService } from '../../legajo.service';


@Component({
  selector: 'app-legajo-detalle',
  templateUrl: './legajo-detalle.component.html',
  styleUrls: ['./legajo-detalle.component.scss']
})
export class LegajoDetalleComponent implements OnInit {
  @Input() legajo: Legajo;

  // pdfSrc: string = 'https://www.adobe.com/be_en/active-use/pdf/Alice_in_Wonderland.pdf';
  pdfSrc: string = '/assets/pdf/openstack-install-guide-essex.pdf';
  
  constructor(
    private route: ActivatedRoute,
    private legajoService: LegajoService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getLegajo()
  }

  getLegajo():void{
    const id= +this.route.snapshot.paramMap.get('id');
    this.legajoService.getLegajo(id)
      .subscribe(legajo=>this.legajo=legajo)

  }

}
