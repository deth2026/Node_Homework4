import express from "express";
import { ProductController } from "../controllers/ProductController";

const router = express.Router();
const controller = new ProductController();

router.post("/products", controller.create);
router.get("/products", controller.getAll);
router.get("/products/:id", controller.getById);
router.put("/products/:id", controller.update);
router.delete("/products/:id", controller.delete);

export default router;