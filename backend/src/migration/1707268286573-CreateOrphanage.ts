import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrphanage1707268286573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: 'Orphanage',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true
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
                        type: 'varchar',
                        isUnique: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('orphanage')
    }
}