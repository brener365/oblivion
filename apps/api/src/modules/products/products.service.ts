import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private readonly products = [
    {
      id: 'prd_1',
      sku: 'LED-BTL-001',
      name: 'Smart LED Bottle',
      supplierTrustScore: 89,
      viralScore: 84,
      margin: 0.52
    }
  ];

  findAll() {
    return this.products;
  }
}
