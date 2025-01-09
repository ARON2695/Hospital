import { AppDataSource } from "../config/db.config";
import { Cita } from "../entities/cita";
import { Pacientes } from "../entities/paciente"; 
import { Medico } from "../entities/medico"; 
import { EstadoAuditoria } from "../enums/estado-Auditoria";

const repository = AppDataSource.getRepository(Cita);

export const insertarCita = async (data: {
    idPaciente: number;
    idMedico: number;
    fechaHora: Date;
    estadoAuditoria: string;}): Promise<Cita> => {

    console.log('insertarCita::server',data)
    const paciente = await AppDataSource.getRepository(Pacientes).findOne({ where: { idPaciente: data.idPaciente } });
    const medico = await AppDataSource.getRepository(Medico).findOne({ where: { idMedico: data.idMedico } });
    if (!data.idPaciente || !data.idMedico) {
        throw new Error("El paciente o el médico no existen.");
    }
    const newCita = new Cita();
    newCita.paciente = paciente;
    newCita.medico = medico;
    newCita.fechaHora = data.fechaHora;
    newCita.estadoAuditoria = data.estadoAuditoria;

    await repository.save(newCita);
    return await repository.findOne({ where: { idCita: newCita.idCita } });
};

export const listarCitas = async (): Promise<Cita[]> => {
    return await repository.find({ where: { estadoAuditoria: EstadoAuditoria.ACTIVO } });
};

export const obtenerCita = async (idCita: number): Promise<Cita> => {
    return await repository.findOne({where: { idCita, estadoAuditoria: EstadoAuditoria.ACTIVO}});
};

export const actualizarCita = async (idCita: number, data: Partial<Cita>): Promise<Cita> => {
    await repository.update(idCita, data);
    return obtenerCita(idCita);
};

export const darBajaCita = async (idCita: number): Promise<void> => {
    await repository.update(idCita, { estadoAuditoria: EstadoAuditoria.INACTIVO });
};
