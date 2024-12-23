import { Request, Response } from "express";
import { Laboratorio } from "../entities/laboratorio";
import * as laboratoriosService from "../services/laboratorio.service";

export const insertarLaboratorio = async (req: Request, res: Response) => {
    try {
        const laboratorio: Partial<Laboratorio> = req.body;
        const nuevoLaboratorio = await laboratoriosService.insertarLaboratorio(laboratorio);
        res.status(201).json(nuevoLaboratorio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const listarLaboratorios = async (req: Request, res: Response) => {
    try {
        const laboratorios = await laboratoriosService.listarLaboratorios();
        res.json(laboratorios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerLaboratorio = async (req: Request, res: Response) => {
    try {
        const idLaboratorio = Number(req.params.id);
        const laboratorio = await laboratoriosService.obtenerLaboratorio(idLaboratorio);
        if (laboratorio) {
            res.json(laboratorio);
        } else {
            res.status(404).json({ error: "Laboratorio no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarLaboratorio = async (req: Request, res: Response) => {
    try {
        const idLaboratorio = Number(req.params.id);
        const laboratorioActualizado = await laboratoriosService.actualizarLaboratorio(idLaboratorio, req.body);
        res.json(laboratorioActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const darBajaLaboratorio = async (req: Request, res: Response) => {
    try {
        const idLaboratorio = Number(req.params.id);
        await laboratoriosService.darBajaLaboratorio(idLaboratorio);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
