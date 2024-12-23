import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pacientes } from "./paciente";
import { Laboratorio } from "./laboratorio"; 

@Entity('resultados_laboratorio')
export class ResultadoLaboratorio {
    @PrimaryGeneratedColumn({ name: 'id_resultado' })
    idResultado: number;

    @ManyToOne(() => Pacientes, (paciente) => paciente.resultadosLaboratorio)
    @JoinColumn({ name: 'id_paciente' })
    paciente: Pacientes;

    @ManyToOne(() => Laboratorio, (laboratorio) => laboratorio.resultadosLaboratorio)
    @JoinColumn({ name: 'id_laboratorio' })
    laboratorio: Laboratorio;

    @Column({ name: 'resultado' })
    resultado: string;

    @Column({ name: 'fecha_resultado' })
    fechaResultado: Date;

    @Column({ name: 'estado_auditoria', default: '1' })
    estadoAuditoria: string;
}
