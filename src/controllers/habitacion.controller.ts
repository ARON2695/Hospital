import { Request, Response } from "express";
import { BaseResponse } from "../shared/base.response";
import { Habitacion } from "../entities/habitacion";
import * as habitacionesService from "../services/habitacion.service";
import { Message } from "../enums/messages";

export const insertarHabitacion = async (req: Request, res: Response) => {
    try {
        console.log("insertarHabitacion");
        const habitacion: Partial<Habitacion> = req.body;
        const nuevaHabitacion = await habitacionesService.insertarHabitacion(habitacion);
        res.status(201).json(BaseResponse.success(nuevaHabitacion, Message.INSERTADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const listarHabitaciones = async (req: Request, res: Response) => {
    try {
        console.log("listarHabitaciones");
        const habitaciones = await habitacionesService.listarHabitaciones();
        res.status(200).json(BaseResponse.success(habitaciones));
    } catch (error) {
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerHabitacion = async (req: Request, res: Response) => {
    try {
        const idHabitacion = Number(req.params.id);
        const habitacion = await habitacionesService.obtenerHabitacion(idHabitacion);
        if (habitacion) {
            res.json(habitacion);
        } else {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND));
        }
    } catch (error) {
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarHabitacion = async (req: Request, res: Response) => {
    try {
        const idHabitacion = Number(req.params.id);
        const habitacionActualizada = await habitacionesService.actualizarHabitacion(idHabitacion, req.body);
        res.status(200).json(BaseResponse.success(habitacionActualizada, Message.ACTUALIZADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaHabitacion = async (req: Request, res: Response) => {
    try {
        const idHabitacion = Number(req.params.id);
        await habitacionesService.darBajaHabitacion(idHabitacion);
        res.status(200).json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.error(error.message));
    }
};
