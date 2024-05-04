import { getDataSource } from "../data-source";
import { Picture } from "../entity/Picture.entity";


export class GetPictureService {
    async execute(id: string) {
        const AppDataSource = await getDataSource();
        const repo = AppDataSource.getRepository(Picture);

        const pictures = await repo.find({
            select: {
                url: true
            },
            where: {
                id_orphanage: id
            }
        })
        return pictures;
    }
}