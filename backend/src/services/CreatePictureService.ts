import { AppDataSource } from "../data-source";
import { Picture } from "../entity/Picture";


interface IPicture {
    url: string;
    id_orphanage: string;
}
export class CreatePictureService {
    async execute({ url, id_orphanage }: IPicture): Promise<Picture | Error> {
        const repo = AppDataSource.getRepository(Picture);

        const verification = await repo.findOne({
            select: {
                url: true,
                id_orphanage: true
            },
            where: {
                url: url,
                id_orphanage: id_orphanage
            }
        })
        if (verification) {
            return new Error('Esta imagem já está cadastrada.')
        }
        const repoImage = repo.create({ url, id_orphanage })
        await repo.save(repoImage);

        return repoImage;
    }
}