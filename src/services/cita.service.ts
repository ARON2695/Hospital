import { AppDataSource } from "../config/db.config";
import { Cita } from "../entities/cita";
import { EstadoAuditoria } from "../enums/estado-Auditoria";

const repository = AppDataSource.getRepository(Cita);

export const insertarCita = async (data: Partial<Cita>): Promise<Cita> => {
    const newCita: Cita = await repository.save(data);
    return await repository.findOne({ where: { idCita: newCita.idCita } });
};

export const listarCitas = async (): Promise<Cita[]> => {
    return await repository.find({ where: { estadoAuditoria: EstadoAuditoria.ACTIVO } });
};

export const obtenerCita = async (idCita: number): Promise<Cita> => {
    // Verificamos que idCita sea un número válido
    if (isNaN(idCita)) {
        throw new Error("El ID de la cita no es válido");
    }
    // Verificar que la cita existe en la base de datos
    const cita = await repository.findOne({ where: { idCita, estadoAuditoria: EstadoAuditoria.ACTIVO } });
    
    if (!cita) {
        throw new Error("Cita no encontrada");
    }
    return cita;
};

export const actualizarCita = async (idCita: number, data: Partial<Cita>): Promise<Cita> => {
    await repository.update(idCita, data);
    return obtenerCita(idCita);
};

export const darBajaCita = async (idCita: number): Promise<void> => {
    await repository.update(idCita, { estadoAuditoria: EstadoAuditoria.INACTIVO });
};
