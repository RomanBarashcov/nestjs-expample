import { getRepository, MigrationInterface, QueryRunner } from "typeorm";

export class Categories1586272659838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(`CREATE TABLE "Categories" (
            "id" SERIAL PRIMARY KEY,
            "type" VARCHAR (50) UNIQUE NOT NULL
        )`);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "Categories" CASCADE`);
    }

}
