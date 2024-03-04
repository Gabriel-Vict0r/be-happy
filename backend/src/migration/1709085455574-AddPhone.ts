import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddPhone1709085455574 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        queryRunner.addColumn('orphanage', new TableColumn({
            name: 'phone',
            type: 'varchar',
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumn('orphanage', 'phone')
    }
}