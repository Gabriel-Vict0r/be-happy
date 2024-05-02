import { getDataSource } from "../data-source";
import { Hour } from "../entity/Hour.entity";

export class CreateHourService {
    async execute(hour: Hour): Promise<Hour | Error> {
        const DataSource = await getDataSource();
        const repo = DataSource.getRepository(Hour);

        const hourOrph = repo.create(hour);
        await repo.save(hourOrph);
        return hourOrph;
    }
}