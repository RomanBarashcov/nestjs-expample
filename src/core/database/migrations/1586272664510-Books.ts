import {MigrationInterface, QueryRunner} from "typeorm";

export class Books1586272664510 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(` CREATE TABLE "Books" (
            "Id" SERIAL PRIMARY KEY,
            "Title" VARCHAR(50) NOT NULL,
            "Description" TEXT NOT NULL,
            "Cover" VARCHAR(255),
            "Price" INT DEFAULT 0,
            "CategoryId" INT REFERENCES "Categories"("Id") ON DELETE CASCADE
         )`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "Books" CASCADE`);
    }

}
