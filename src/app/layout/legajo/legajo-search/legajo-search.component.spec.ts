import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegajoSearchComponent } from './legajo-search.component';

describe('LegajoSearchComponent', () => {
  let component: LegajoSearchComponent;
  let fixture: ComponentFixture<LegajoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegajoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegajoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
