import { RecibosModule } from './recibos.module';

describe('RecibosModule', () => {
  let recibosModule: RecibosModule;

  beforeEach(() => {
    recibosModule = new RecibosModule();
  });

  it('should create an instance', () => {
    expect(recibosModule).toBeTruthy();
  });
});
