import { AppDataSource } from "../config/db.config";
import { ResultadoLaboratorio } from "../entities/resultado-laboratorio";
import { Pacientes } from "../entities/paciente";
import { Laboratorio } from "../entities/laboratorio";  

const repository = AppDataSource.getRepository(ResultadoLaboratorio);
const pacienteRepository = AppDataSource.getRepository(Pacientes);
const laboratorioRepository = AppDataSource.getRepository(Laboratorio);

export const insertarResultado =  async (data: Partial<ResultadoLaboratorio>): Promise<ResultadoLaboratorio> => {
    const paciente = await pacienteRepository.findOneBy({ idPaciente: data.paciente?.idPaciente });
    if (!paciente) {
        throw new Error("El paciente no existe");
    }
    const laboratorio = await laboratorioRepository.findOneBy({ idLaboratorio: data.laboratorio?.idLaboratorio });
    if (!laboratorio) {
        throw new Error("La habitación no existe");
    }
    const newResultado = repository.create({
        ...data,
        paciente, 
        laboratorio,
    });
    return await repository.save(newResultado);
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
