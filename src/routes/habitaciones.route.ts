import { Router } from "express";
import  {actualizarHabitacion, darBajaHabitacion, insertarHabitacion, listarHabitaciones, obtenerHabitacion } from '../controllers/habitaciones.controller';

const router = Router();

router.post("/",insertarHabitacion);
router.get("/",listarHabitaciones);
router.get("/:id",obtenerHabitacion);
router.put("/:id",actualizarHabitacion);
router.delete("/:id",darBajaHabitacion);

export default router;
