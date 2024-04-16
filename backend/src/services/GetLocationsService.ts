import { getDataSource } from "../data-source";
import { Location } from "../entity/Location.entity";


export class GetLocationService {
    async execute() {
        const AppDataSource = await getDataSource();
        const repo = AppDataSource.getRepository(Location);

        const locations = await repo.find();

        return locations;
    }
}