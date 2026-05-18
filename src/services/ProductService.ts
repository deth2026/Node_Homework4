import { ProductModel } from "../models/ProductModel";

export class ProductService {

  async create(data: any) {
    return await ProductModel.create(data);
  }

  async getAll() {
    return await ProductModel.find();
  }

  async getById(id: string) {
    return await ProductModel.findById(id);
  }

  async update(id: string, data: any) {
    return await ProductModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return await ProductModel.findByIdAndDelete(id);
  }
}