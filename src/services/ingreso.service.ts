import { AppDataSource } from "../config/db.config";
import { Ingreso } from "../entities/ingreso";

const repository = AppDataSource.getRepository(Ingreso);

export const insertarIngreso = async (data: Partial<Ingreso>): Promise<Ingreso> => {
    const nuevoIngreso: Ingreso = await repository.save(data);
    return await repository.findOne({ where: { idIngreso: nuevoIngreso.idIngreso } });
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
