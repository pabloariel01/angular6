import { LegajoModule } from './legajo.module';

describe('LegajoModule', () => {
  let legajoModule: LegajoModule;

  beforeEach(() => {
    legajoModule = new LegajoModule();
  });

  it('should create an instance', () => {
    expect(legajoModule).toBeTruthy();
  });
});
