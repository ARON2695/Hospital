import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('habitaciones')
export class Habitacion {
    @PrimaryGeneratedColumn({ name: 'id_habitacion' })
    idHabitacion: number;

    @Column({ name: 'tipo' })
    tipo: string;

    @Column({ name: 'estado_auditoria', default: '1' })
    estadoAuditoria: string;
}
