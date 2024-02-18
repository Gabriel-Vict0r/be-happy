import { AppDataSource } from "../data-source";
import { Orphanage } from "../entity/Orphanage";

interface IOrphanage {
    name: string;
    cnpj: string;
    about: string;
    instructions: string;
    acept_weekend: boolean;
    id_location: string;
}
export class CreateOrphanageService {
    async execute(orphanage: IOrphanage): Promise<Orphanage | Error> {
        const repo = AppDataSource.getRepository(Orphanage)
        const verification = await repo.findOne({
            select: {
                cnpj: true,
                id_location: true
            },
            where: {
                cnpj: orphanage.cnpj,
                id_location: orphanage.id_location
            }
        });
        if (verification) {
            return new Error('Este Orfanato já está cadastrado.')
        }
        const newOrphanage = repo.create(orphanage)

        await repo.save(newOrphanage)

        return newOrphanage;
    }
}