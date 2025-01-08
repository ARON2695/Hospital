import { Column, CreateDateColumn,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Cita } from "./cita";
import {  ResultadoLaboratorio} from "./resultado-laboratorio";

@Entity('pacientes')
export class Pacientes {
    @PrimaryGeneratedColumn({name: 'id_paciente'})
    idPaciente: number;

    @Column({ name: 'nombres'})
    nombres: string;

    @Column({ name: 'apellidos'})
    apellidos: string;

    @Column({ name: 'tipo_documento'}) 
    tipoDocumento: string;

    @Column({ name: 'numero_documento'}) 
    numeroDocumento: string;

    @Column({ name: 'fecha_nacimiento'}) 
    fechaNacimiento: Date;

    @Column({ name: 'sexo'})
    sexo: string;

    @Column({ name: 'direccion'})
    direccion: string;

    @Column({ name: 'telefono'}) 
    telefono: string;

    @Column({ name: 'correo_electronico'}) 
    correoElectronico: string;

    @Column({ name: 'tipo_de_seguro'}) 
    tipoDeSeguro: string;

    @Column({ name: 'historial_medico'}) 
    historialMedico: string;

    @Column({ name: 'estado_auditoria'}) 
    estadoAuditoria: string;

    @OneToMany(() => Cita, (cita) => cita.paciente)
    citas: Cita[];

    @OneToMany(() => ResultadoLaboratorio, (resultadoLaboratorio) => resultadoLaboratorio.paciente)
    resultadosLaboratorio: ResultadoLaboratorio[];

}