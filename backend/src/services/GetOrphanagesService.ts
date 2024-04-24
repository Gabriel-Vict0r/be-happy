import { getDataSource } from "../data-source";
import { OrphanageView } from "../entity/OrphanageView.entity";

export class GetOrphanagesService {
    async execute() {
        const AppDataSource = await getDataSource();
        const repo = AppDataSource.getRepository(OrphanageView);

        const getOrphanages = await repo.find();
        return getOrphanages;
    }
}