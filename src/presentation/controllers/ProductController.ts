import { Request, Response } from "express";
import { ProductUseCase } from "../../application/usecases/ProductUseCase";

export class ProductController {
  constructor(private useCase: ProductUseCase) {}

  create = async (req: Request, res: Response) => {
    const result = await this.useCase.create(req.body);

    res.json({
      message: "Product created successfully",
      data: result,
    });
  };

  getAll = async (
    req: Request,
    res: Response
  ) => {
    const result = await this.useCase.getAll();

    res.json(result);
  };

  getById = async (
    req: Request,
    res: Response
  ) => {
    const result = await this.useCase.getById(
      req.params.id as string
    );

    res.json(result);
  };

  update = async (
    req: Request,
    res: Response
  ) => {
    const result = await this.useCase.update(
      req.params.id as string,
      req.body
    );

    res.json({
      message: "Product updated successfully",
      data: result,
    });
  };

  delete = async (
    req: Request,
    res: Response
  ) => {
    const result = await this.useCase.delete(
      req.params.id as string
    );

    res.json({
      message: "Product deleted successfully",
      data: result,
    });
  };
}