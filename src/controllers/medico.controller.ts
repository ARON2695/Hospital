import { Request, Response } from "express";
import { BaseResponse } from "../shared/base.response";
import * as medicoService from "../services/medico.service";
import { Medico } from "../entities/medico";
import { Message } from "../enums/messages";

export const insertarMedico = async (req: Request, res: Response) => {
    try {
        console.log("insertarMedico");
        
        const medico: Partial<Medico> = req.body;
        const newMedico: Medico = await medicoService.insertarMedico(medico);
        res.json(BaseResponse.success(newMedico, Message.INSERTADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const listarMedicos = async (req: Request, res: Response) => {
    try {
        console.log("listarMedicos");
        const medicos: Medico[] = await medicoService.listarMedico();
        res.json(BaseResponse.success(medicos));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const obtenerMedico = async (req: Request, res: Response) => {
    try {
        console.log("obtenerMedico");
        const idMedico = Number(req.params.id);
        const medico: Medico = await medicoService.obtenerMedico(idMedico);
        if (medico) {
            res.json(BaseResponse.success(medico));
        } else {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND));
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarMedico = async (req: Request, res: Response) => {
    try {
        console.log("actualizarMedico");
        const idMedico = Number(req.params.id);
        const data: Partial<Medico> = req.body;
        const updatedMedico: Medico = await medicoService.actualizarPaciente(idMedico, data);
        res.json(BaseResponse.success(updatedMedico, Message.ACTUALIZADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const darBajaMedico = async (req: Request, res: Response) => {
    try {
        console.log("darBajaMedico");
        const idMedico = Number(req.params.id);
        await medicoService.darBajaMedico(idMedico);
        res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
