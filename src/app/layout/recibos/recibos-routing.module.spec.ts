import { RecibosRoutingModule } from './recibos-routing.module';

describe('RecibosRoutingModule', () => {
  let recibosRoutingModule: RecibosRoutingModule;

  beforeEach(() => {
    recibosRoutingModule = new RecibosRoutingModule();
  });

  it('should create an instance', () => {
    expect(recibosRoutingModule).toBeTruthy();
  });
});
