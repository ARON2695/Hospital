import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pacientes } from "./paciente";  
import { Medico } from "./medico";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;

    @Column({ name: 'usuario' })
    usuario: string;

    @Column({ name: 'contrasena' })
    contrasena: string;

    @Column({ name: 'rol' })
    rol: string;

    @OneToMany(() => Pacientes, (paciente) => paciente.usuario)
    pacientes: Pacientes[];  

    @OneToMany(() => Medico, (medico) => medico.usuario)
    medicos: Medico[];
}
