import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddForeignKey1711809682394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('orphanage', new TableForeignKey(
            {
                name: 'fk_orphanage_position',
                columnNames: ['id_location'],
                referencedTableName: 'location',
                referencedColumnNames: ['id']
            }
        ))
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('orphanage', 'fk_orphanage_position')
    }
}