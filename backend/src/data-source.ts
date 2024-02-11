import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { CreateOrphanage1707268286573 } from "./migration/1707268286573-CreateOrphanage"
import { CreateLocation1707654904130 } from "./migration/1707654904130-CreateLocation"
import { CreatePicture1707666905362 } from "./migration/1707666905362-CreatePicture"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "beHappy",
    synchronize: true,
    entities: [User],
    migrations: [CreateOrphanage1707268286573,
        CreateLocation1707654904130,
        CreatePicture1707666905362],
    subscribers: [],
})