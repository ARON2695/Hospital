import { Request, Response } from "express";
import { BaseResponse } from "../shared/base.response";
import * as citasService from "../services/cita.service";
import { Cita } from "../entities/cita";
import { Message } from "../enums/messages";

export const insertarCita = async (req: Request, res: Response) => {
    try {
        console.log("insertarCita");

        // Desestructuramos los datos relevantes del cuerpo de la solicitud
        const { idPaciente, idMedico, fechaHora, estadoAuditoria } = req.body;

        // Llamamos al servicio pasando los datos requeridos
        const newCita = await citasService.insertarCita({
            idPaciente,
            idMedico,
            fechaHora,
            estadoAuditoria
        });

        // Retornamos la respuesta exitosa
        res.status(201).json(BaseResponse.success(newCita, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarCitas = async (req: Request, res: Response) => {
    try {
        console.log("listarCitas");
        const citas: Cita[] = await citasService.listarCitas();
        res.status(200).json(BaseResponse.success(citas));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerCita = async (req: Request, res: Response) => {
    try {
            const {idCita} = req.params;
            const cita: Cita = await citasService.obtenerCita(Number(idCita));
            if(!cita) {
                res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404))
                return;
            }
            res.json(BaseResponse.success(cita));
        } catch (error) {
            console.error(error);
            res.status(500).json(BaseResponse.error(error.message));
        } 
}

export const actualizarCita = async (req: Request, res: Response) => {
   try {
           const {idCita} = req.params;
           const cita: Partial<Cita> = req.body;
           if(!(await citasService.obtenerCita(Number(idCita)))){
               res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
               return;
           }
           const updateCita: Cita = await citasService.actualizarCita(Number(idCita),cita);
           res.json(BaseResponse.success(updateCita, Message.ACTUALIZADO_OK));
       } catch (error) {
           console.error(error);
           res.status(500).json(BaseResponse.error(error.message));
       }
   }

export const darBajaCita = async (req: Request, res: Response) => {
    try {
            const {idCita} = req.params;
            if(!(await citasService.obtenerCita(Number(idCita)))){
                res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
                return;
            }
            await citasService.darBajaCita(Number(idCita));
            res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
        } catch (error) {
            console.error(error);
            res.status(500).json(BaseResponse.error(error.message));
        } 
    }