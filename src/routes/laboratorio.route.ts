import { Router } from "express";
import {actualizarLaboratorio, darBajaLaboratorio, insertarLaboratorio, listarLaboratorios, obtenerLaboratorio} from "../controllers/laboratorio.controller";

const router = Router();

router.post("/",insertarLaboratorio);
router.get("/",listarLaboratorios);
router.get("/:id",obtenerLaboratorio);
router.put("/:id",actualizarLaboratorio);
router.delete("/:id",darBajaLaboratorio);

export default router;
