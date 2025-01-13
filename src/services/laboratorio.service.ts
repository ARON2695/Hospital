import { AppDataSource } from "../config/db.config";
import { Laboratorio } from "../entities/laboratorio";

const repository = AppDataSource.getRepository(Laboratorio);

export const insertarLaboratorio = async (data: Partial<Laboratorio>): Promise<Laboratorio> => {
    const nuevoLaboratorio: Laboratorio = await repository.save(data);
    return await repository.findOne({ where: { idLaboratorio: nuevoLaboratorio.idLaboratorio } });
};

export const listarLaboratorios = async (): Promise<Laboratorio[]> => {
    return await repository.find({ where: { estadoAuditoria: '1' } });
};

export const obtenerLaboratorio = async (idLaboratorio: number): Promise<Laboratorio> => {
    return await repository.findOne({
        where: { idLaboratorio, estadoAuditoria: '1' },
        relations: ["resultadosLaboratorio"], 
    });
};

export const actualizarLaboratorio = async (idLaboratorio: number, data: Partial<Laboratorio>): Promise<Laboratorio> => {
    await repository.update(idLaboratorio, data);
    return obtenerLaboratorio(idLaboratorio);
};

export const darBajaLaboratorio = async (idLaboratorio: number): Promise<void> => {
    await repository.update(idLaboratorio, { estadoAuditoria: '0' });
};
