import { AppDataSource } from "../config/db.config";
import { Habitacion } from "../entities/habitaciones";

const repository = AppDataSource.getRepository(Habitacion);

export const insertarHabitacion = async (data: Partial<Habitacion>): Promise<Habitacion> => {
    const nuevaHabitacion: Habitacion = await repository.save(data);
    return await repository.findOne({ where: { idHabitacion: nuevaHabitacion.idHabitacion } });
};

export const listarHabitaciones = async (): Promise<Habitacion[]> => {
    return await repository.find({ where: { estadoAuditoria: '1' } });
};

export const obtenerHabitacion = async (idHabitacion: number): Promise<Habitacion> => {
    return await repository.findOne({ where: { idHabitacion, estadoAuditoria: '1' } });
};

export const actualizarHabitacion = async (idHabitacion: number, data: Partial<Habitacion>): Promise<Habitacion> => {
    await repository.update(idHabitacion, data);
    return obtenerHabitacion(idHabitacion);
};

export const darBajaHabitacion = async (idHabitacion: number): Promise<void> => {
    await repository.update(idHabitacion, { estadoAuditoria: '0' });
};
