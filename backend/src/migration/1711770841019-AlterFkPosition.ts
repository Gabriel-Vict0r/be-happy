import { Column, MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AlterFkPosition1711770841019 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('orphanage', new TableColumn(
            {
                name: 'id_location',
                type: 'uuid',
                isNullable: true
            },
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('orphanage', 'id_location')
    }
}