import { Product } from "../../domain/entities/product";
import { ProductRepository } from "../../domain/repositories/ProductRepository";
import { ProductModel } from "../database/ProductModel";

export class ProductRepositoryImpl
  implements ProductRepository
{
  async create(product: Product): Promise<Product> {
    return await ProductModel.create(product);
  }

  async getAll(): Promise<Product[]> {
    return await ProductModel.find();
  }

  async getById(id: string): Promise<Product | null> {
    return await ProductModel.findById(id);
  }

  async update(
    id: string,
    product: Partial<Product>
  ): Promise<Product | null> {
    return await ProductModel.findByIdAndUpdate(
      id,
      product,
      { new: true }
    );
  }

  async delete(id: string): Promise<Product | null> {
    return await ProductModel.findByIdAndDelete(id);
  }
}