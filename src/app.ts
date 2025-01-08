import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import pacienteRouter from './routes/paciente.route';
import medicoRouter from './routes/medico.route';
import citaRouter from './routes/cita.route';
import habitacionRouter from './routes/habitacion.route';
import ingresosRouter from './routes/ingreso.route';
import laboratorioRouter from './routes/laboratorio.route';
import ResultadoLaboratorioRouter from './routes/resultado-laboratorio.route';
import { AppDataSource } from './config/db.config';

const app: Application = express();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/paciente',pacienteRouter);
app.use('/api/v1/medico',medicoRouter);
app.use('/api/v1/citas',citaRouter);
app.use('/api/v1/habitacion',habitacionRouter);
app.use('/api/v1/ingreso',ingresosRouter);
app.use('/api/v1/laboratorio',laboratorioRouter);
app.use('/api/v1/resultado',ResultadoLaboratorioRouter);

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}

export default app;
