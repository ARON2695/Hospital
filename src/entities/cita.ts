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

    @Column({ name: 'dia_agendado' })
    diaAgendado: Date;

    @Column({ name: 'fue_realizada', default: false })
    fueRealizada: boolean;

    @Column({ name: 'hora_inicio' })
    horaInicio: string;

    @Column({ name: 'hora_termino' })
    horaTermino: string;

    @Column({ name: 'estado_auditoria', default: '1' })
    estadoAuditoria: string;
}