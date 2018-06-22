import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from "@angular/router";
import {LegajoComponent} from "./legajo.component"
import {LegajoDetalleComponent} from "./legajo-detalle/legajo-detalle.component";


const routes:Routes=[
  { path:'',component:LegajoComponent },
  { path:"legajodetail/:id", component:LegajoDetalleComponent},
  { path:'legajo',component:LegajoComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegajoRoutingModule { }
