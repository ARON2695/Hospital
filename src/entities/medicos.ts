import { Column, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cita } from "./citas";


@Entity('medicos')
export class Medico {
    @PrimaryGeneratedColumn({ name: 'id_medico' })
    idMedico: number;

    @Column({ name: 'nombres' })
    nombres: string;

    @Column({ name: 'apellidos' })
    apellidos: string;

    @Column({ name: 'especialidad' })
    especialidad: string;

    @Column({ name: 'numero_colegiatura' })
    numeroColegiatura: string;

    @Column({ name: 'telefono'})
    telefono: string;

    @Column({ name: 'correo_electronico' })
    correoElectronico: string;

    @Column({ name: 'horario' })
    horario: string;

    @Column({ name: 'disponible' })
    disponible: boolean;

    @Column({ name: 'estado_auditoria' })
    estadoAuditoria: string;

    @OneToMany(() => Cita, (cita) => cita.medico)
    citas: Cita[];
}
