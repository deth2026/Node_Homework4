import { Product } from "../../domain/entities/product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";

export class ProductUseCase {
  constructor(private repo: ProductRepository) {}

  async create(data: Product) {
    return await this.repo.create(data);
  }

  async getAll() {
    return await this.repo.getAll();
  }

  async getById(id: string) {
    return await this.repo.getById(id);
  }

  async update(id: string, data: Partial<Product>) {
    return await this.repo.update(id, data);
  }

  async delete(id: string) {
    return await this.repo.delete(id);
  }
}