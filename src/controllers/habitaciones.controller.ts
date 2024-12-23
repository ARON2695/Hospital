import { Request, Response } from "express";
import { Habitacion } from "../entities/habitaciones";
import * as habitacionesService from "../services/habitaciones.service";

export const insertarHabitacion = async (req: Request, res: Response) => {
    try {
        const habitacion: Partial<Habitacion> = req.body;
        const nuevaHabitacion = await habitacionesService.insertarHabitacion(habitacion);
        res.status(201).json(nuevaHabitacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const listarHabitaciones = async (req: Request, res: Response) => {
    try {
        const habitaciones = await habitacionesService.listarHabitaciones();
        res.json(habitaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerHabitacion = async (req: Request, res: Response) => {
    try {
        const idHabitacion = Number(req.params.id);
        const habitacion = await habitacionesService.obtenerHabitacion(idHabitacion);
        if (habitacion) {
            res.json(habitacion);
        } else {
            res.status(404).json({ error: "Habitación no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarHabitacion = async (req: Request, res: Response) => {
    try {
        const idHabitacion = Number(req.params.id);
        const habitacionActualizada = await habitacionesService.actualizarHabitacion(idHabitacion, req.body);
        res.json(habitacionActualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const darBajaHabitacion = async (req: Request, res: Response) => {
    try {
        const idHabitacion = Number(req.params.id);
        await habitacionesService.darBajaHabitacion(idHabitacion);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
