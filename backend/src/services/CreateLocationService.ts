import { report } from "process";
import { AppDataSource } from "../data-source";
import { Location } from "../entity/Location";


interface IPosition {
    latitude: number;
    longitude: number;
}
export class CreateLocationService {
    async execute({ latitude, longitude }: IPosition): Promise<Location | Error> {
        const repo = AppDataSource.getRepository(Location);

        if (await repo.findOne({
            select: {
                latitude: true,
                longitude: true
            },
            where: {
                latitude: latitude,
                longitude: longitude
            }
        })) {
            return new Error('This location already is been used.')
        }
        const location = repo.create({
            latitude,
            longitude
        })

        await repo.save(location);

        return location;
    }

}