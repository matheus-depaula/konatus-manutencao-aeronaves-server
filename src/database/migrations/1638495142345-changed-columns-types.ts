import {MigrationInterface, QueryRunner} from "typeorm";

export class changedColumnsTypes1638495142345 implements MigrationInterface {
    name = 'changedColumnsTypes1638495142345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stages" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."stages_status_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`ALTER TABLE "stages" ADD "status" "public"."stages_status_enum" NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "stages" DROP COLUMN "type"`);
        await queryRunner.query(`CREATE TYPE "public"."stages_type_enum" AS ENUM('1', '2', '3')`);
        await queryRunner.query(`ALTER TABLE "stages" ADD "type" "public"."stages_type_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "maintenances" DROP COLUMN "status"`);
        await queryRunner.query(`CREATE TYPE "public"."maintenances_status_enum" AS ENUM('0', '1')`);
        await queryRunner.query(`ALTER TABLE "maintenances" ADD "status" "public"."maintenances_status_enum" NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maintenances" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."maintenances_status_enum"`);
        await queryRunner.query(`ALTER TABLE "maintenances" ADD "status" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "stages" DROP COLUMN "type"`);
        await queryRunner.query(`DROP TYPE "public"."stages_type_enum"`);
        await queryRunner.query(`ALTER TABLE "stages" ADD "type" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "stages" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."stages_status_enum"`);
        await queryRunner.query(`ALTER TABLE "stages" ADD "status" integer NOT NULL DEFAULT '0'`);
    }

}
