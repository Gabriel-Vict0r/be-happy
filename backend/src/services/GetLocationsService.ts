import { AppDataSource } from "../data-source";
import { Location } from "../entity/Location";


export class GetLocationService {
    async execute() {
        const repo = AppDataSource.getRepository(Location);

        const locations = await repo.find();

        return locations;
    }
}