import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegajoDetalleComponent } from './legajo-detalle.component';

describe('LegajoDetalleComponent', () => {
  let component: LegajoDetalleComponent;
  let fixture: ComponentFixture<LegajoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegajoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegajoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
