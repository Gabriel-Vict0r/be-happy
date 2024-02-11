import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Orphanage } from "./Orphanage";
import { v4 as uuid } from 'uuid'

@Entity('Picture')
export class Picture {
    @PrimaryColumn()
    id: string;

    @Column()
    url: string;

    @Column()
    id_orphanage: string;

    @OneToOne(() => Orphanage)
    @JoinColumn({ name: 'id_orphanage' })
    orphanage: Orphanage;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}