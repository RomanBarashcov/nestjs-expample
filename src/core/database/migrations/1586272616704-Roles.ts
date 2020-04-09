import { MigrationInterface, QueryRunner } from "typeorm";

export class Roles1586272616704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(`CREATE TABLE "Roles" (
            "id" SERIAL PRIMARY KEY,
            "type" VARCHAR (50) UNIQUE NOT NULL
        )`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "Roles" CASCADE`);
    }

}
