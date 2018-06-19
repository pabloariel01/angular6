import { LegajoRoutingModule } from './legajo-routing.module';

describe('LegajoRoutingModule', () => {
  let legajoRoutingModule: LegajoRoutingModule;

  beforeEach(() => {
    legajoRoutingModule = new LegajoRoutingModule();
  });

  it('should create an instance', () => {
    expect(legajoRoutingModule).toBeTruthy();
  });
});
