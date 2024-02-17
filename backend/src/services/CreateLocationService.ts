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
        const verification = await repo.findOne({
            select: {
                latitude: true,
                longitude: true
            },
            where: {
                latitude: latitude,
                longitude: longitude
            }
        })
        if (verification) {
            return new Error('Esta localização já está sendo usada.')
        }
        const location = repo.create({
            latitude,
            longitude
        })
        await repo.save(location);

        return location;
    }
}