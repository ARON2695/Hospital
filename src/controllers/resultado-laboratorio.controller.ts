import { Request, Response } from "express";
import { BaseResponse } from "../shared/base.response";
import { ResultadoLaboratorio } from "../entities/resultado-laboratorio";
import * as resultadosService from "../services/resultado-laboratorio.service";
import { Message } from "../enums/messages";

export const insertarResultado = async (req: Request, res: Response) => {
    try {
        const resultado: Partial<ResultadoLaboratorio> = req.body;
        const nuevoResultado = await resultadosService.insertarResultado(resultado);
        res.status(201).json(BaseResponse.success(nuevoResultado, Message.INSERTADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const listarResultados = async (req: Request, res: Response) => {
    try {
        const resultados = await resultadosService.listarResultados();
        res.status(200).json(BaseResponse.success(resultados));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const obtenerResultado = async (req: Request, res: Response) => {
    try {
        const idResultado = Number(req.params.id);
        const resultado = await resultadosService.obtenerResultado(idResultado);
        if (resultado) {
            res.json(resultado);
        } else {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND));
        }
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const actualizarResultado = async (req: Request, res: Response) => {
    try {
        const idResultado = Number(req.params.id);
        const resultadoActualizado = await resultadosService.actualizarResultado(idResultado, req.body);
        res.status(200).json(BaseResponse.success(resultadoActualizado, Message.ACTUALIZADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const darBajaResultado = async (req: Request, res: Response) => {
    try {
        const idResultado = Number(req.params.id);
        await resultadosService.darBajaResultado(idResultado);
        res.status(200).json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};
