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
import { resolve } from "path"
import { rejects } from "assert"
import { AlterTypeCoords1713396562353 } from "./migration/1713396562353-AlterTypeCoords"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    host: process.env.POSTGRES_HOST,
    ssl: true,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: false,
    entities: [Hour, Location, Orphanage, Picture],
    migrations: [
        AlterTypeCoords1713396562353
    ]
})
AppDataSource.initialize().then(
    async () => {
        console.log('conectou ao banco')
    }
).catch((err) => console.log(err))

export const getDataSource = (delay = 3000): Promise<DataSource> => {
    if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (AppDataSource.isInitialized) {
                resolve(AppDataSource);
            }
            else {
                reject('failed to inicialize database');
            }
        }, 1000);
    })
}