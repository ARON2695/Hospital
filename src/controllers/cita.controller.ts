import { Request, Response } from "express";
import { BaseResponse } from "../shared/base.response";
import * as citasService from "../services/cita.service";
import { Cita } from "../entities/cita";
import { Message } from "../enums/messages";

export const insertarCita = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("insertarCita");
        const cita: Partial<Cita> = req.body;
        const newCita: Cita = await citasService.insertarCita(cita);
        res.status(201).json(BaseResponse.success(newCita, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarCitas = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("listarCitas");
        const citas: Cita[] = await citasService.listarCitas();
        res.status(200).json(BaseResponse.success(citas));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerCita = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("obtenerCita");
        const idCita = Number(req.params.idCita);
        console.log("ID Cita recibido:", req.params.idCita);

        if (isNaN(idCita)) {  // Verificar si no es un número válido
            res.status(400).json(BaseResponse.error("El ID de la cita no es válido"));
            return;
        }
        const cita: Cita = await citasService.obtenerCita(idCita);
        if (cita) {
            res.status(200).json(BaseResponse.success(cita));
        } else {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND));
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const modificarCita = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("modificarCita");
        const idCita = Number(req.params.id);
        const data: Partial<Cita> = req.body;
        const updatedCita: Cita = await citasService.actualizarCita(idCita, data);
        res.status(200).json(BaseResponse.success(updatedCita, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaCita = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("darBajaCita");
        const idCita = Number(req.params.id);
        await citasService.darBajaCita(idCita);
        res.status(200).json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
