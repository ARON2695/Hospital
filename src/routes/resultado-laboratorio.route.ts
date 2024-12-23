import { Router } from "express";
import * as resultadosController from "../controllers/resultado-laboratorio.controller";

const router = Router();

// Define las rutas para Resultados_Laboratorio
router.post("/", resultadosController.insertarResultado);
router.get("/", resultadosController.listarResultados);
router.get("/:id", resultadosController.obtenerResultado);
router.put("/:id", resultadosController.actualizarResultado);
router.delete("/:id", resultadosController.darBajaResultado);

export default router;
