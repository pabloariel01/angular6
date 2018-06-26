
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LegajoRoutingModule } from './legajo-routing.module';
import { LegajoComponent } from './legajo.component';
import { LegajoDetalleComponent } from './legajo-detalle/legajo-detalle.component';

import {  HttpClientModule } from '@angular/common/http';
import { LegajoSearchComponent } from './legajo-search/legajo-search.component';

import {FilterPipe} from '../FilterPipe';

// import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,    
    LegajoRoutingModule,
    FormsModule,
    HttpClientModule,
    // PdfViewerModule

     
  ],
  declarations: [LegajoComponent,LegajoDetalleComponent, LegajoSearchComponent,
    FilterPipe]
})
export class LegajoModule { }
