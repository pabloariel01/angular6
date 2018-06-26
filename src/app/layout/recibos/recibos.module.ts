import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecibosRoutingModule } from './/recibos-routing.module';
import { RecibosComponent } from './recibos.component';

import {FilterPipe} from '../FilterPipe';

@NgModule({
  imports: [
    CommonModule,
    RecibosRoutingModule,
    FormsModule,
    
  ],
  declarations: [RecibosComponent,FilterPipe]
})
export class RecibosModule { }
