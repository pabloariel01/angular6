
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LegajoRoutingModule } from './legajo-routing.module';
import { LegajoComponent } from './legajo.component';
import { LegajoDetalleComponent } from './legajo-detalle/legajo-detalle.component';


@NgModule({
  imports: [
    CommonModule,    
    LegajoRoutingModule,
    FormsModule   
  ],
  declarations: [LegajoComponent,LegajoDetalleComponent]
})
export class LegajoModule { }
