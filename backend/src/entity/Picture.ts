import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Orphanage } from "./Orphanage";
import { v4 as uuid } from 'uuid'

@Entity('picture')
export class Picture {
    @PrimaryColumn()
    id: string;

    @Column()
    url: string;

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