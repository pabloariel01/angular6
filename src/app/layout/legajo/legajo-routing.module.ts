import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from "@angular/router";
import {LegajoComponent} from "./legajo.component"

const routes:Routes=[
  {
    path:'',component:LegajoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegajoRoutingModule { }
