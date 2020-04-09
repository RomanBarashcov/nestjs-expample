import {MigrationInterface, QueryRunner} from "typeorm";

export class Reviews1586272692978 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(`CREATE TABLE "Reviews" (
            "id" SERIAL PRIMARY KEY,
            "bookId" INT REFERENCES "Books"("id") ON DELETE CASCADE,
            "userId" INT REFERENCES "Users"("id") ON DELETE CASCADE,
            "review" TEXT,
            "rating" INT DEFAULT 5
         )`);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "Reviews" CASCADE`);
    }

}
