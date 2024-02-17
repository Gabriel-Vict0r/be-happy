import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateOrphanage1707268286573 } from "./migration/1707268286573-CreateOrphanage"
import { CreateLocation1707654904130 } from "./migration/1707654904130-CreateLocation"
import { CreatePicture1707666905362 } from "./migration/1707666905362-CreatePicture"
import { Location } from "./entity/Location"
import { Orphanage } from "./entity/Orphanage"
import { Picture } from "./entity/Picture"
import { Adjusments1707963627782 } from "./migration/1707963627782-Adjusments"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "beHappy",
    synchronize: true,
    entities: [Picture, Orphanage, Location],
    migrations: [
    ]
    //logging: ['query', 'error']
})