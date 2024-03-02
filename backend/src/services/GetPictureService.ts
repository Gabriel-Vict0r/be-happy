import { AppDataSource } from "../data-source";
import { Picture } from "../entity/Picture";


export class GetPictureService {
    async execute(id: string) {
        const repo = AppDataSource.getRepository(Picture);

        const pictures = await repo.find({
            select: {
                url: true
            },
            where: {
                id_orphanage: id
            }
        })
    }
}