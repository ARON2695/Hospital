import { Request, Response } from "express";
import { BaseResponse } from "../shared/base.response";
import { Laboratorio } from "../entities/laboratorio";
import * as laboratoriosService from "../services/laboratorio.service";
import { Message } from "../enums/messages";

export const insertarLaboratorio = async (req: Request, res: Response) => {
    try {
        const laboratorio: Partial<Laboratorio> = req.body;
        const nuevoLaboratorio = await laboratoriosService.insertarLaboratorio(laboratorio);
        res.status(201).json(BaseResponse.success(nuevoLaboratorio, Message.INSERTADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const listarLaboratorios = async (req: Request, res: Response) => {
    try {
        const laboratorios = await laboratoriosService.listarLaboratorios();
        res.status(200).json(BaseResponse.success(laboratorios));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const obtenerLaboratorio = async (req: Request, res: Response) => {
    try {
        const idLaboratorio = Number(req.params.id);
        const laboratorio = await laboratoriosService.obtenerLaboratorio(idLaboratorio);
        if (laboratorio) {
            res.json(laboratorio);
        } else {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND));
        }
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const actualizarLaboratorio = async (req: Request, res: Response) => {
    try {
        const idLaboratorio = Number(req.params.id);
        const laboratorioActualizado = await laboratoriosService.actualizarLaboratorio(idLaboratorio, req.body);
        res.status(200).json(BaseResponse.success(laboratorioActualizado, Message.ACTUALIZADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const darBajaLaboratorio = async (req: Request, res: Response) => {
    try {
        const idLaboratorio = Number(req.params.id);
        await laboratoriosService.darBajaLaboratorio(idLaboratorio);
        res.status(200).json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};
