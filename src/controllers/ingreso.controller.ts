import { Request, Response } from "express";
import { Ingreso } from "../entities/ingreso";
import * as ingresosService from "../services/ingreso.service";

export const insertarIngreso = async (req: Request, res: Response) => {
    try {
        const ingreso: Partial<Ingreso> = req.body;
        const nuevoIngreso = await ingresosService.insertarIngreso(ingreso);
        res.status(201).json(nuevoIngreso);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const listarIngresos = async (req: Request, res: Response) => {
    try {
        const ingresos = await ingresosService.listarIngresos();
        res.json(ingresos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerIngreso = async (req: Request, res: Response) => {
    try {
        const idIngreso = Number(req.params.id);
        const ingreso = await ingresosService.obtenerIngreso(idIngreso);
        if (ingreso) {
            res.json(ingreso);
        } else {
            res.status(404).json({ error: "Ingreso no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarIngreso = async (req: Request, res: Response) => {
    try {
        const idIngreso = Number(req.params.id);
        const ingresoActualizado = await ingresosService.actualizarIngreso(idIngreso, req.body);
        res.json(ingresoActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const darBajaIngreso = async (req: Request, res: Response) => {
    try {
        const idIngreso = Number(req.params.id);
        await ingresosService.darBajaIngreso(idIngreso);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
