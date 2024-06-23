//EN ESTE ARCHIVO: MÉTODOS + ENDPOINTS
import { Router } from "express"; //uso el método router de express
export const router = Router(); //exporto todos los routers

//Importando la clase itemsController del archivo controllers:
import { itemsController } from "../controllers/controllers.js";

//GET - All products
router.get("/products", itemsController.getAll);

//GET - Health check
router.get("/health", itemsController.healthCheck);

//GET - Get by Id
router.get("/products/search/:productId", itemsController.getById);

//GET - Get by Category
router.get("/products/search", itemsController.getByCategory);

//POST - New product
router.post("/products/new", itemsController.newItem);

//POST - Suscribe to newsletter
router.post("/sendEmail", itemsController.newEmail);

//PATCH - Update product
router.patch("/products/:productId", itemsController.updateItem);

//DELETE - Delete product
router.delete("/products/:productId", itemsController.deleteById);