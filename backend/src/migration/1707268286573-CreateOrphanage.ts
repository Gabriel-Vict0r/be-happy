import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrphanage1707268286573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orphanage',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isUnique: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'acept_weekend',
                        type: 'boolean',
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'about',
                        type: 'text',
                    },
                    {
                        name: 'instructions',
                        type: 'text',
                    },
                    {
                        name: 'fk_location',
                        type: 'uuid',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_orphanage_position',
                        columnNames: ['fk_location'],
                        referencedTableName: 'location',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanage')
    }
}