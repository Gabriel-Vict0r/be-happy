import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class Adjusments1707963627782 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn('orphanage', 'id', new TableColumn(
            {
                name: 'id',
                type: 'uuid',
                isUnique: false,
                isPrimary: true
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.changeColumn('orphanage', 'id', new TableColumn(
            {
                name: 'id',
                type: 'uuid',
                isUnique: true,
                isPrimary: true
            }
        ))
    }

}
