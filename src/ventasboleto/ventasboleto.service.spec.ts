import { Test, TestingModule } from '@nestjs/testing';
import { VentasboletoService } from './ventasboleto.service';

describe('VentasboletoService', () => {
  let service: VentasboletoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VentasboletoService],
    }).compile();

    service = module.get<VentasboletoService>(VentasboletoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
