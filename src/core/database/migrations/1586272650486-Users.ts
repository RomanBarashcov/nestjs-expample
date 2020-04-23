import {MigrationInterface, QueryRunner} from "typeorm";

export class Users1586272650486 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(`CREATE TABLE "Users" (
            "id" SERIAL PRIMARY KEY,
            "email" VARCHAR(50) UNIQUE NOT NULL,
            "phone" INT NOT NULL,
            "password" VARCHAR(50) NOT NULL,
            "avatar" VARCHAR(255),
            "roleId" INT REFERENCES "Roles"("id") ON DELETE CASCADE
         )`);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "Users" CASCADE`);
    }

}
