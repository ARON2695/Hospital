import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Cita } from "./cita";
import { Usuario } from "./usuario";

@Entity('medicos')
export class Medico {
  @PrimaryGeneratedColumn({ name: 'id_medico' })
  idMedico: number;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'apellido_paterno' })
  apellidoPaterno: string;

  @Column({ name: 'apellido_materno' })
  apellidoMaterno: string;

  @Column({ name: 'especialidad' })
  especialidad: string;

  @Column({ name: 'numero_colegiatura' })
  numeroColegiatura: string;

  @Column({ name: 'telefono' })
  telefono: string;

  @Column({ name: 'correo_electronico' })
  correoElectronico: string;

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.medicos, { nullable: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @OneToMany(() => Cita, (cita) => cita.medico)
  citas: Cita[];
}