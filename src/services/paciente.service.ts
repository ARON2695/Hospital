import { AppDataSource } from "../config/db.config";
import {Pacientes} from "../entities/paciente";
import {EstadoAuditoria} from "../enums/estado-Auditoria";

const repository = AppDataSource.getRepository(Pacientes);

export const insertarPaciente = async (data: Partial<Pacientes>): Promise<Pacientes> => {
    console.log('insertarPaciente::server',data)
    const newPaciente: Pacientes = await repository.save(data);
    return await repository.findOne({where: {idPaciente: newPaciente.idPaciente}});
}

export const listarPaciente = async (): Promise<Pacientes[]> => {
    return await repository.find({where: { estadoAuditoria: EstadoAuditoria.ACTIVO}});
}

export const obtenerPaciente = async (idPaciente: number): Promise<Pacientes> => {
    return await repository.findOne({where: { idPaciente, estadoAuditoria: EstadoAuditoria.ACTIVO}});
}

export const actualizarPaciente = async (idPaciente: number, data: Partial<Pacientes>): Promise<Pacientes> => {
    await repository.update(idPaciente,data);
    return obtenerPaciente(idPaciente);
}

export const darBajaPaciente = async (idPaciente: number): Promise<void> => {
    await repository.update(idPaciente,{estadoAuditoria: EstadoAuditoria.INACTIVO});
}