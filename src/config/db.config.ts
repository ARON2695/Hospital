import { DataSource } from "typeorm";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME} from "../shared/constants"
import { Pacientes } from "../entities/paciente";
import { Cita } from "../entities/cita";
import { Medico } from "../entities/medico";
import { Habitacion } from "../entities/habitacion";
import { Ingreso } from "../entities/ingreso";
import { Laboratorio } from "../entities/laboratorio";
import { ResultadoLaboratorio } from "../entities/resultado-laboratorio";
import { Usuario } from "../entities/usuario";
import { HistorialClinico } from "../entities/historial-clinico";


export const AppDataSource = new DataSource({
    type: DB_TYPE as any,
    host: DB_HOST,
    port: Number(DB_PORT||'0'),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [Pacientes,
               Cita,
               Medico,
               Habitacion,
               Ingreso,
               Laboratorio,
               ResultadoLaboratorio,
               Usuario,
               HistorialClinico],
});