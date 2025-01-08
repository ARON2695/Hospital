import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pacientes } from "./paciente";
import { Medico } from "./medico";

@Entity('citas')
export class Cita {
    @PrimaryGeneratedColumn({ name: 'id_cita' })
    idCita: number;

    @ManyToOne(() => Pacientes, (paciente) => paciente.citas)
    @JoinColumn({ name: 'id_paciente' })
    paciente: Pacientes;

    @ManyToOne(() => Medico, (medico) => medico.citas)
    @JoinColumn({ name: 'id_medico' })
    medico: Medico;

    @Column({ name: 'fecha_hora' })
    fechaHora: Date;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;
}
