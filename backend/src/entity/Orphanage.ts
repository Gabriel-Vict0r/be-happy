import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Location } from "./Location";
import { v4 as uuid } from 'uuid'

@Entity('orphanage')
export class Orphanage {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cnpj: string;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    acept_weekend: boolean;

    @Column()
    id_location: string;

    @OneToOne(() => Location)
    @JoinColumn({ name: 'id_location' })
    location: Location;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

    @Column()
    phone: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}