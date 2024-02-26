import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Orphanage } from "./Orphanage";

@Entity('hours')
export class Hour {

    @PrimaryColumn()
    id: string;

    @Column()
    initial_hour: Date;

    @Column()
    final_hour: Date;

    @Column()
    id_orphanage: string;

    @ManyToOne(() => Orphanage)
    @JoinColumn({ name: 'id_orphanage' })
    orphanage: Orphanage;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}