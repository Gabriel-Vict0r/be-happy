import "reflect-metadata"
import { DataSource, ViewEntity } from "typeorm"
import { CreateOrphanage1707268286573 } from "./migration/1707268286573-CreateOrphanage"
import { CreateLocation1707654904130 } from "./migration/1707654904130-CreateLocation"
import { CreatePicture1707666905362 } from "./migration/1707666905362-CreatePicture"
import { Location } from "./entity/Location.entity"
import { Orphanage } from "./entity/Orphanage.entity"
import { Picture } from "./entity/Picture.entity"
import { Adjusments1707963627782 } from "./migration/1707963627782-Adjusments"
import { AlterColumnsCreatedAt1708132100233 } from "./migration/1708132100233-AlterColumnsCreatedAt"
import { Hour } from "./entity/Hour.entity"
import { CreateHours1708987894675 } from "./migration/1708987894675-CreateHours"
import { AddPhone1709085455574 } from "./migration/1709085455574-AddPhone"
import { OrphanageView } from "./entity/OrphanageView.entity"
import { AlterFkPosition1711770841019 } from "./migration/1711770841019-AlterFkPosition"
import { AddForeignKey1711809682394 } from "./migration/1711809682394-AddForeignKey"
import dotenv from 'dotenv'

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    host: process.env.POSTGRES_HOST,
    ssl: true,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    entities: [Picture, Orphanage, Location, Hour, OrphanageView],
    migrations: [
        CreateOrphanage1707268286573,
        CreateLocation1707654904130,
        CreatePicture1707666905362,
        Adjusments1707963627782,
        AlterColumnsCreatedAt1708132100233,
        CreateHours1708987894675,
        AddPhone1709085455574,
        AlterFkPosition1711770841019,
        AddForeignKey1711809682394
    ]
})