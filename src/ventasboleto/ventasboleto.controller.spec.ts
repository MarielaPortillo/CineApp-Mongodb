import { Test, TestingModule } from '@nestjs/testing';
import { VentasboletoController } from './ventasboleto.controller';

describe('VentasboletoController', () => {
  let controller: VentasboletoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VentasboletoController],
    }).compile();

    controller = module.get<VentasboletoController>(VentasboletoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
