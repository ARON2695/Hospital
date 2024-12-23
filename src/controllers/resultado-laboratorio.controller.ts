import { Request, Response } from "express";
import { ResultadoLaboratorio } from "../entities/resultado-laboratorio";
import * as resultadosService from "../services/resultados-laboratorio.service";

export const insertarResultado = async (req: Request, res: Response) => {
    try {
        const resultado: Partial<ResultadoLaboratorio> = req.body;
        const nuevoResultado = await resultadosService.insertarResultado(resultado);
        res.status(201).json(nuevoResultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const listarResultados = async (req: Request, res: Response) => {
    try {
        const resultados = await resultadosService.listarResultados();
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerResultado = async (req: Request, res: Response) => {
    try {
        const idResultado = Number(req.params.id);
        const resultado = await resultadosService.obtenerResultado(idResultado);
        if (resultado) {
            res.json(resultado);
        } else {
            res.status(404).json({ error: "Resultado no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarResultado = async (req: Request, res: Response) => {
    try {
        const idResultado = Number(req.params.id);
        const resultadoActualizado = await resultadosService.actualizarResultado(idResultado, req.body);
        res.json(resultadoActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const darBajaResultado = async (req: Request, res: Response) => {
    try {
        const idResultado = Number(req.params.id);
        await resultadosService.darBajaResultado(idResultado);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
