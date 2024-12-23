import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ResultadoLaboratorio } from "./resultado-laboratorio";

@Entity('laboratorios')
export class Laboratorio {
    @PrimaryGeneratedColumn({ name: 'id_laboratorio' })
    idLaboratorio: number;

    @Column({ name: 'nombre' })
    nombre: string;

    @Column({ name: 'direccion' })
    direccion: string;

    @Column({ name: 'telefono' })
    telefono: string;

    @Column({ name: 'estado_auditoria', default: '1' })
    estadoAuditoria: string;

    @OneToMany(() => ResultadoLaboratorio, (resultadoLaboratorio) => resultadoLaboratorio.laboratorio)
    resultadosLaboratorio: ResultadoLaboratorio[];
}
