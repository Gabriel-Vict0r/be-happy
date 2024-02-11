import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Location } from "./Location";
import { v4 as uuid } from 'uuid'

@Entity('Orphanage')
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

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}