import { Request, Response } from "express";
import { BaseResponse } from "../shared/base.response";
import { Ingreso } from "../entities/ingreso";
import * as ingresosService from "../services/ingreso.service";
import { Message } from "../enums/messages";

export const insertarIngreso = async (req: Request, res: Response) => {
    try {
        console.log("insertarIngreso");
        const ingreso: Partial<Ingreso> = req.body;
        const nuevoIngreso = await ingresosService.insertarIngreso(ingreso);
        res.status(201).json(BaseResponse.success(nuevoIngreso, Message.INSERTADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const listarIngresos = async (req: Request, res: Response) => {
    try {
        console.log("listarIngresos");
        const ingresos = await ingresosService.listarIngresos();
        res.status(201).json(BaseResponse.success(ingresos));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const obtenerIngreso = async (req: Request, res: Response) => {
    try {
        const idIngreso = Number(req.params.id);
        const ingreso = await ingresosService.obtenerIngreso(idIngreso);
        if (ingreso) {
            res.json(ingreso);
        } else {
            res.status(404).json(BaseResponse.error(Message.NOT_FOUND));
        }
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const actualizarIngreso = async (req: Request, res: Response) => {
    try {
        const idIngreso = Number(req.params.id);
        const ingresoActualizado = await ingresosService.actualizarIngreso(idIngreso, req.body);
        res.status(200).json(BaseResponse.success(ingresoActualizado, Message.ACTUALIZADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};

export const darBajaIngreso = async (req: Request, res: Response) => {
    try {
        const idIngreso = Number(req.params.id);
        await ingresosService.darBajaIngreso(idIngreso);
        res.status(200).json(BaseResponse.success(null, Message.ELIMINADO_OK));
    } catch (error) {
        res.status(500).json(BaseResponse.success(error.message));
    }
};
