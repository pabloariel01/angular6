import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegajoComponent } from './legajo.component';
import { LegajoRoutingModule } from './legajo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LegajoRoutingModule
  ],
  declarations: [LegajoComponent]
})
export class LegajoModule { }
