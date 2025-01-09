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
        const {idMedico} = req.params;
        const medico: Medico = await medicoService.obtenerMedico(Number(idMedico));        
        if (!medico) {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
            return;
        }
        res.json(BaseResponse.success(medico));
    } catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

export const actualizarMedico = async (req: Request, res: Response) => {
    try {
            const {idMedico} = req.params;
            const medico: Partial<Medico> = req.body;
            if(!(await medicoService.obtenerMedico(Number(idMedico)))){
                res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
                return;
            }
            const updateMedico: Medico = await medicoService.actualizarMedico(Number(idMedico),medico);
            res.json(BaseResponse.success(updateMedico, Message.ACTUALIZADO_OK));
        } catch (error) {
            console.error(error);
            res.status(500).json(BaseResponse.error(error.message));
        }
    }
export const darBajaMedico = async (req: Request, res: Response) => {
    try {
            const {idMedico} = req.params;
            if(!(await medicoService.obtenerMedico(Number(idMedico)))){
                res.status(404).json(BaseResponse.error(Message.NOT_FOUND,404));
                return;
            }
            await medicoService.darBajaMedico(Number(idMedico));
            res.json(BaseResponse.success(null, Message.ELIMINADO_OK));
        } catch (error) {
            console.error(error);
            res.status(500).json(BaseResponse.error(error.message));
        } 
}