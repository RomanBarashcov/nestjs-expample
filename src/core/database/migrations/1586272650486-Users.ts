import {MigrationInterface, QueryRunner} from "typeorm";

export class Users1586272650486 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(`CREATE TABLE "Users" (
            "Id" SERIAL PRIMARY KEY,
            "Email" VARCHAR(50) UNIQUE NOT NULL,
            "Phone" INT NOT NULL,
            "Password" VARCHAR(50) UNIQUE NOT NULL,
            "Avatar" VARCHAR(255),
            "RoleId" INT REFERENCES "Roles"("Id") ON DELETE CASCADE
         )`);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "Users" CASCADE`);
    }

}
