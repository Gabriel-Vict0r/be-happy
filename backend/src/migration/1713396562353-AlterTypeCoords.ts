import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTypeCoords1713396562353 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('ALTER TABLE location ALTER COLUMN latitude TYPE DOUBLE PRECISION, ALTER COLUMN longitude TYPE DOUBLE PRECISION')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('ALTER TABLE `location` MODIFY COLUMN `latitude` INTEGER; ALTER TABLE `location` MODIFY COLUMN `longitude` INTEGER;');
    }
}