import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHours1708987894675 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'hours',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'start_hour',
                    type: 'time',
                },
                {
                    name: 'end_hour',
                    type: 'time',
                },
                {
                    name: 'id_orphanage',
                    type: 'uuid'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('hours')
    }
}
