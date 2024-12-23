import { DataSource } from "typeorm";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME} from "../shared/constants"
import { Pacientes } from "../entities/paciente";
import { Cita } from "../entities/citas";
import { Medico } from "../entities/medicos";
import { Habitacion } from "../entities/habitaciones";
import { Ingreso } from "../entities/ingresos";
import { Laboratorio } from "../entities/laboratorio";
import { ResultadoLaboratorio } from "../entities/resultado-laboratorio";


export const AppDataSource = new DataSource({
    type: DB_TYPE as any,
    host: DB_HOST,
    port: Number(DB_PORT||'0'),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [Pacientes,Cita,Medico,Habitacion,Ingreso,Laboratorio,ResultadoLaboratorio],
});