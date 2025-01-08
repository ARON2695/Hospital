import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pacientes } from "./paciente";
import { Habitacion } from "./habitacion";

@Entity('ingresos')
export class Ingreso {
    @PrimaryGeneratedColumn({ name: 'id_ingreso' })
    idIngreso: number;

    @ManyToOne(() => Pacientes)
    @JoinColumn({ name: 'id_paciente' })
    paciente: Pacientes;

    @ManyToOne(() => Habitacion)
    @JoinColumn({ name: 'id_habitacion' })
    habitacion: Habitacion;

    @Column({ name: 'fecha_ingreso' })
    fechaIngreso: Date;

    @Column({ name: 'fecha_alta', nullable: true })
    fechaAlta: Date;

    @Column({ name: 'diagnostico' })
    diagnostico: string;

    @Column({ name: 'estado_auditoria', default: '1' })
    estadoAuditoria: string;
}
