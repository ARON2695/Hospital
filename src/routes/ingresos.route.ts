import { Router } from "express";
import {actualizarIngreso, darBajaIngreso, insertarIngreso, listarIngresos, obtenerIngreso  } from "../controllers/ingresos.controller";

const router = Router();

router.post("/",insertarIngreso);
router.get("/",listarIngresos);
router.get("/:id",obtenerIngreso);
router.put("/:id",actualizarIngreso);
router.delete("/:id",darBajaIngreso);

export default router;
