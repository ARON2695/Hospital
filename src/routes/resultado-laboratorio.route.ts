import { Router } from "express";
import {actualizarResultado, darBajaResultado, insertarResultado, listarResultados, obtenerResultado} from "../controllers/resultado-laboratorio.controller";

const router = Router();

router.post("/",insertarResultado);
router.get("/",listarResultados);
router.get("/:id",obtenerResultado);
router.put("/:id",actualizarResultado);
router.delete("/:id",darBajaResultado);

export default router;
