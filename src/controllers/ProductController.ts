import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

const service = new ProductService();

export class ProductController {

  create = async (req: Request, res: Response) => {
    const result = await service.create(req.body);
    res.json(result);
  };

  getAll = async (req: Request, res: Response) => {
    const result = await service.getAll();
    res.json(result);
  };

  getById = async (req: Request, res: Response) => {
    const result = await service.getById(req.params.id as string);
    res.json(result);
  };

  update = async (req: Request, res: Response) => {
    const result = await service.update(req.params.id as string,req.body);
    res.json(result);
  };

  delete = async (req: Request, res: Response) => {
    const result = await service.delete(req.params.id as string);
    res.json(result);
  };
}