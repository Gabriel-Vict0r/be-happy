import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLocation1707654904130 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table(
            {
                name: 'location',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isUnique: true,
                        isPrimary: true,
                    },
                    {
                        name: 'Latitude',
                        type: 'decimal'
                    },
                    {
                        name: 'Longitude',
                        type: 'decimal',
                    }
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('location')
    }
}