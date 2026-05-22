import { Product } from "../entities/product";

export interface ProductRepository {
  create(product: Product): Promise<Product>;

  getAll(): Promise<Product[]>;

  getById(id: string): Promise<Product | null>;

  update(
    id: string,
    product: Partial<Product>
  ): Promise<Product | null>;

  delete(id: string): Promise<Product | null>;
}