import { Router } from "express";
import * as ingresosController from "../controllers/ingresos.controller";

const router = Router();

router.post("/", ingresosController.insertarIngreso);
router.get("/", ingresosController.listarIngresos);
router.get("/:id", ingresosController.obtenerIngreso);
router.put("/:id", ingresosController.actualizarIngreso);
router.delete("/:id", ingresosController.darBajaIngreso);

export default router;
