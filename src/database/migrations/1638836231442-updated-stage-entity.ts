import {MigrationInterface, QueryRunner} from "typeorm";

export class updatedStageEntity1638836231442 implements MigrationInterface {
    name = 'updatedStageEntity1638836231442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stages" ALTER COLUMN "value" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stages" ALTER COLUMN "value" SET NOT NULL`);
    }

}
