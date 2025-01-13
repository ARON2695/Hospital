import { Column, CreateDateColumn, OneToMany, ManyToOne, Entity, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Usuario } from "./usuario"; 
import { Cita } from "./cita";
import { ResultadoLaboratorio } from "./resultado-laboratorio";
import { HistorialClinico } from "./historial-clinico"; 

@Entity('pacientes')
export class Pacientes {
  @PrimaryGeneratedColumn({ name: 'id_paciente' })
  idPaciente: number;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'apellido_paterno' })
  apellidoPaterno: string;

  @Column({ name: 'apellido_materno' })
  apellidoMaterno: string;

  @Column({ name: 'tipo_documento' })
  tipoDocumento: string;

  @Column({ name: 'numero_documento' })
  numeroDocumento: string;

  @Column({ name: 'fecha_nacimiento' })
  fechaNacimiento: Date;

  @Column({ name: 'sexo' })
  sexo: string;

  @Column({ name: 'direccion' })
  direccion: string;

  @Column({ name: 'telefono' })
  telefono: string;

  @Column({ name: 'correo_electronico' })
  correoElectronico: string;

  @Column({ name: 'tipo_de_seguro'})
  tipoDeSeguro: string;

  @Column({ name: 'tipo_pago' })
  tipoPago: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.pacientes, { nullable: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @OneToMany(() => HistorialClinico, (historial) => historial.paciente)
  historialClinico: HistorialClinico[];

  @OneToMany(() => Cita, (cita) => cita.paciente)
  citas: Cita[];

  @OneToMany(() => ResultadoLaboratorio, (resultado) => resultado.paciente)
  resultadosLaboratorio: ResultadoLaboratorio[];

  @Column({ name: 'estado_auditoria' })
  estadoAuditoria: string;

}