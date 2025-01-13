import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Pacientes } from "./paciente";  
@Entity('historial_clinico')
export class HistorialClinico {
    @PrimaryGeneratedColumn({ name: 'id_historial' })
    idHistorial: number;

    @Column({ name: 'fecha' })
    fecha: Date;

    @Column({ name: 'descripcion' })
    descripcion: string;

    @Column({ name: 'tratamiento' })
    tratamiento: string;

    @ManyToOne(() => Pacientes, (paciente) => paciente.historialClinico)
    @JoinColumn({ name: 'id_paciente' })
    paciente: Pacientes;  
}