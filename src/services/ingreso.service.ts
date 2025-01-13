import { AppDataSource } from "../config/db.config";
import { Ingreso } from "../entities/ingreso";
import { Pacientes } from "../entities/paciente";
import { Habitacion } from "../entities/habitacion";

const repository = AppDataSource.getRepository(Ingreso);
const pacienteRepository = AppDataSource.getRepository(Pacientes);
const habitacionRepository = AppDataSource.getRepository(Habitacion);

export const insertarIngreso = async (data: Partial<Ingreso>): Promise<Ingreso> => {
    const paciente = await pacienteRepository.findOneBy({ idPaciente: data.paciente?.idPaciente });
    if (!paciente) {
        throw new Error("El paciente no existe");
    }
    const habitacion = await habitacionRepository.findOneBy({ idHabitacion: data.habitacion?.idHabitacion });
    if (!habitacion) {
        throw new Error("La habitación no existe");
    }
    const newIngreso = repository.create({
        ...data,
        paciente, 
        habitacion,
    });
    return await repository.save(newIngreso);
};


export const listarIngresos = async (): Promise<Ingreso[]> => {
    return await repository.find({ relations: ["paciente", "habitacion"], where: { estadoAuditoria: '1' } });
};

export const obtenerIngreso = async (idIngreso: number): Promise<Ingreso> => {
    return await repository.findOne({
        relations: ["paciente", "habitacion"],
        where: { idIngreso, estadoAuditoria: '1' },
    });
};

export const actualizarIngreso = async (idIngreso: number, data: Partial<Ingreso>): Promise<Ingreso> => {
    await repository.update(idIngreso, data);
    return obtenerIngreso(idIngreso);
};

export const darBajaIngreso = async (idIngreso: number): Promise<void> => {
    await repository.update(idIngreso, { estadoAuditoria: '0' });
};
