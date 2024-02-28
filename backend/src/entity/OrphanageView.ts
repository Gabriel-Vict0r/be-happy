import { View, ViewColumn, ViewEntity } from "typeorm";


@ViewEntity({
    expression: `
        SELECT "orphanage"."id" as "id", "orphanage"."name" AS name, "orphanage"."about" AS about,
        "location"."latitude" AS latitude, "location"."longitude" AS longitude, "orphanage"."instructions" AS instructions, "orphanage"."acept_weekend" AS acept_weekend, "orphanage"."phone" from "orphanage" left join "location" on "location"."id" = "orphanage"."id_location"
    `
})
export class OrphanageView {
    @ViewColumn()
    id: string;

    @ViewColumn()
    name: string;

    @ViewColumn()
    about: string;

    @ViewColumn()
    latitude: number;

    @ViewColumn()
    longitude: number;

    @ViewColumn()
    instructions: string;

    @ViewColumn()
    acept_weekend: boolean;

    @ViewColumn()
    phone: string;
}