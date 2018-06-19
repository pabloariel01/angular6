
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LegajoRoutingModule } from './legajo-routing.module';
import { LegajoComponent } from './legajo.component';
// import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,    
    LegajoRoutingModule,
    FormsModule,

    
  ],
  declarations: [LegajoComponent]
})
export class LegajoModule { }
