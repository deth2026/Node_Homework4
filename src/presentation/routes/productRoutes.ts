import express from "express";

import { ProductController } from "../controllers/ProductController";

import { ProductUseCase } from "../../application/usecases/ProductUseCase";

import { ProductRepositoryImpl } from "../../infrastructure/repositories/ProductRepositoryImpl";

const router = express.Router();

// Dependency Injection
const repo = new ProductRepositoryImpl();

const useCase = new ProductUseCase(repo);

const controller = new ProductController(useCase);

// Routes
router.post("/products", controller.create);

router.get("/products", controller.getAll);

router.get("/products/:id", controller.getById);

router.put("/products/:id", controller.update);

router.delete("/products/:id", controller.delete);

export default router;