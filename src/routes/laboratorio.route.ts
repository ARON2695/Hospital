import { Router } from "express";
import * as laboratoriosController from "../controllers/laboratorio.controller";

const router = Router();

router.post("/", laboratoriosController.insertarLaboratorio);
router.get("/", laboratoriosController.listarLaboratorios);
router.get("/:id", laboratoriosController.obtenerLaboratorio);
router.put("/:id", laboratoriosController.actualizarLaboratorio);
router.delete("/:id", laboratoriosController.darBajaLaboratorio);

export default router;
