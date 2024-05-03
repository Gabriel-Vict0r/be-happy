import { getDataSource } from "../data-source";
import { Hour } from "../entity/Hour.entity";

interface IHour {
    initial_hour: string;
    final_hour: string;
    id_orphanage: string;
}
export class CreateHourService {
    async execute(hour: IHour): Promise<Hour> {
        const DataSource = await getDataSource();
        const repo = DataSource.getRepository(Hour);
        console.log(hour);
        const hourOrph = repo.create(hour);
        console.log(hourOrph)
        await repo.save(hourOrph);
        return hourOrph;
    }
}