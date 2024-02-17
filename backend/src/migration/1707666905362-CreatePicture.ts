import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePicture1707666905362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: 'picture',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isUnique: true,
                        isPrimary: true
                    },
                    {
                        name: 'url',
                        type: 'varchar',
                    },
                    {
                        name: 'id_orphanage',
                        type: 'uuid',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_orphanage_and_image',
                        columnNames: ['id_orphanage'],
                        referencedTableName: 'orphanage',
                        referencedColumnNames: ['id']
                    }
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('picture')
    }
}