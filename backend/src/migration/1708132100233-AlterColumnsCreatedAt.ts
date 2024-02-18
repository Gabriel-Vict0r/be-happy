import { Column, MigrationInterface, QueryRunner, TableColumn } from "typeorm";


export class AlterColumnsCreatedAt1708132100233 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('orphanage', [new TableColumn({
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()'
        }), new TableColumn({
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()'
        })])
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumns('orphanage', ['createdAt', 'updatedAt'])
    }
}
