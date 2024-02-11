import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
@Entity('location')
export class Location {
    @PrimaryColumn()
    id: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}