import { AppDataSource } from "../config/db.config";
import { Pacientes } from "../entities/paciente";
import { Usuario } from "../entities/usuario"; 
import { EstadoAuditoria } from "../enums/estado-Auditoria";
import { HistorialClinico } from "../entities/historial-clinico"; 

const repository = AppDataSource.getRepository(Pacientes);

export const obtenerPacienteConHistorialYUsuario = async (idPaciente: number): Promise<Pacientes | undefined> => {
    const paciente = await repository.findOne({
        where: { idPaciente, estadoAuditoria: EstadoAuditoria.ACTIVO },
        relations: ['historialClinico', 'usuario'],  
    });

    if (!paciente) {
        throw new Error("Paciente no encontrado");
    }

    return paciente;
};

export const insertarPaciente = async (data: Partial<Pacientes>): Promise<Pacientes> => {
    const newPaciente: Pacientes = await repository.save(data);
    return await repository.findOne({ where: { idPaciente: newPaciente.idPaciente }, relations: ['usuario'] });
};

export const listarPaciente = async (): Promise<Pacientes[]> => {
    return await repository.find({ where: { estadoAuditoria: EstadoAuditoria.ACTIVO }, relations: ['usuario'] });
};

export const obtenerPaciente = async (idPaciente: number): Promise<Pacientes | undefined> => {
    return await repository.findOne({ where: { idPaciente, estadoAuditoria: EstadoAuditoria.ACTIVO }, relations: ['usuario'] });
};

export const actualizarPaciente = async (idPaciente: number, data: Partial<Pacientes>): Promise<Pacientes> => {
    await repository.update(idPaciente, data);
    return obtenerPaciente(idPaciente);
};

export const darBajaPaciente = async (idPaciente: number): Promise<void> => {
    await repository.update(idPaciente, { estadoAuditoria: EstadoAuditoria.INACTIVO });
};