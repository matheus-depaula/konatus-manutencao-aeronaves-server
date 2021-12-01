import {MigrationInterface, QueryRunner} from "typeorm";

export class createdEntities1638402277394 implements MigrationInterface {
    name = 'createdEntities1638402277394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stages" ("id" character varying NOT NULL, "description" character varying NOT NULL, "status" integer NOT NULL DEFAULT '0', "type" integer NOT NULL, "value" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "maintenanceId" character varying, CONSTRAINT "PK_16efa0f8f5386328944769b9e6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "maintenances" ("id" character varying NOT NULL, "description" character varying NOT NULL, "status" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" character varying, CONSTRAINT "PK_62403473bd524a42d58589aa78b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "stages" ADD CONSTRAINT "FK_9cce57aab9e2b60c7c8c6fd0dda" FOREIGN KEY ("maintenanceId") REFERENCES "maintenances"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "maintenances" ADD CONSTRAINT "FK_1fb2b9eadfbb0ab86405e158154" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "maintenances" DROP CONSTRAINT "FK_1fb2b9eadfbb0ab86405e158154"`);
        await queryRunner.query(`ALTER TABLE "stages" DROP CONSTRAINT "FK_9cce57aab9e2b60c7c8c6fd0dda"`);
        await queryRunner.query(`DROP TABLE "maintenances"`);
        await queryRunner.query(`DROP TABLE "stages"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
