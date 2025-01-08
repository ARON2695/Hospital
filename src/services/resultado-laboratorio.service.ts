import { AppDataSource } from "../config/db.config";
import { ResultadoLaboratorio } from "../entities/resultado-laboratorio";

const repository = AppDataSource.getRepository(ResultadoLaboratorio);

export const insertarResultado = async (data: Partial<ResultadoLaboratorio>): Promise<ResultadoLaboratorio> => {
    const nuevoResultado: ResultadoLaboratorio = await repository.save(data);
    return await repository.findOne({ where: { idResultado: nuevoResultado.idResultado } });
};

export const listarResultados = async (): Promise<ResultadoLaboratorio[]> => {
    return await repository.find({ relations: ["paciente", "laboratorio"], where: { estadoAuditoria: '1' } });
};

export const obtenerResultado = async (idResultado: number): Promise<ResultadoLaboratorio> => {
    return await repository.findOne({
        relations: ["paciente", "laboratorio"],
        where: { idResultado, estadoAuditoria: '1' },
    });
};

export const actualizarResultado = async (idResultado: number, data: Partial<ResultadoLaboratorio>): Promise<ResultadoLaboratorio> => {
    await repository.update(idResultado, data);
    return obtenerResultado(idResultado);
};

export const darBajaResultado = async (idResultado: number): Promise<void> => {
    await repository.update(idResultado, { estadoAuditoria: '0' });
};
