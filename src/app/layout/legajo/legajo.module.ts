
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LegajoRoutingModule } from './legajo-routing.module';
import { LegajoComponent } from './legajo.component';
import { LegajoDetalleComponent } from './legajo-detalle/legajo-detalle.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LegajoSearchComponent } from './legajo-search/legajo-search.component';

import {legajoFilterPipe} from '../legajoTextFilter';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,    
    LegajoRoutingModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule

     
  ],
  declarations: [LegajoComponent,LegajoDetalleComponent, LegajoSearchComponent,
    legajoFilterPipe]
})
export class LegajoModule { }
