import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterHour1714679117554 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('ALTER TABLE hours ALTER COLUMN initial_hour TYPE TIME, ALTER COLUMN final_hour TYPE TIME');
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query('ALTER TABLE hours ALTER COLUMN initial_hour TYPE TIMESTAMP, ALTER COLUMN final_hour TYPE TIMESTAMP');
    }
}