import { Router } from "express";
import * as habitacionesController from "../controllers/habitaciones.controller";

const router = Router();

router.post("/", habitacionesController.insertarHabitacion);
router.get("/", habitacionesController.listarHabitaciones);
router.get("/:id", habitacionesController.obtenerHabitacion);
router.put("/:id", habitacionesController.actualizarHabitacion);
router.delete("/:id", habitacionesController.darBajaHabitacion);

export default router;
