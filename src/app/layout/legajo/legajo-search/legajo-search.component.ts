import { Component, OnInit } from '@angular/core';
import {Observable,Subject} from "rxjs";

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {Legajo} from "../Legajo";
import {LegajoService} from "../../legajo.service";

@Component({
  selector: 'app-legajo-search',
  templateUrl: './legajo-search.component.html',
  styleUrls: ['./legajo-search.component.scss']
})
export class LegajoSearchComponent implements OnInit {

  legajos$:Observable<Legajo[]>;
  private searchTerms=new Subject<string>();


  constructor(
    private legajoService:LegajoService
  ) { }

  search(term:string):void{
    this.searchTerms.next(term)
  }

  ngOnInit():void {
    this.legajos$=this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=>this.legajoService.searchLegajo(term))
    )

  }

}
