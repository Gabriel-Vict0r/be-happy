import { DataSource } from "typeorm";
import { AppDataSource } from "../data-source";
import { OrphanageView } from "../entity/OrphanageView";


export class GetOrphanageService {
    async execute(id: string) {
        const repo = AppDataSource.getRepository(OrphanageView);

        const orphanage = await repo.findOne({
            where: {
                id: id
            }
        })

        return orphanage;
    }
}