import { AppDataSource } from "../config/db.config";
import {Medico} from "../entities/medico";
import {EstadoAuditoria} from "../enums/estado-Auditoria";

const repository = AppDataSource.getRepository(Medico);

export const insertarMedico = async (data: Partial<Medico>): Promise<Medico> => {
    console.log('insertarMedico::server',data)
    const newMedico: Medico = await repository.save(data);
    return await repository.findOne({where: {idMedico: newMedico.idMedico}});
}

export const listarMedico = async (): Promise<Medico[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO}});
}

export const obtenerMedico = async (idMedico: number): Promise<Medico> => {
    return await repository.findOne({where: { idMedico, estadoAuditoria: EstadoAuditoria.ACTIVO}});
}

export const actualizarPaciente = async (idMedico: number, data: Partial<Medico>): Promise<Medico> => {
    await repository.update(idMedico,data);
    return obtenerMedico(idMedico);
}

export const darBajaMedico = async (idMedico: number): Promise<void> => {
    await repository.update(idMedico,{estadoAuditoria: EstadoAuditoria.INACTIVO});
}