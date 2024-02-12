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
    async execute(orphanage: IOrphanage) {
        const repo = AppDataSource.getRepository(Orphanage)
        if (await repo.find({
            select: {
                name: true,
                cnpj: true,
                id_location: true
            },
            where: {
                name: orphanage.name,
                cnpj: orphanage.cnpj,
                id_location: orphanage.id_location
            }
        })) {
            return new Error('Este Orfanato já está cadastrado.')
        }
        const newOrphanage = repo.create(orphanage)

        await repo.save(newOrphanage)

        return newOrphanage;
    }
}