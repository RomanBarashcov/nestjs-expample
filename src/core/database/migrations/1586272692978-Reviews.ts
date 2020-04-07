import {MigrationInterface, QueryRunner} from "typeorm";

export class Reviews1586272692978 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(`CREATE TABLE "Reviews" (
            "Id" SERIAL PRIMARY KEY,
            "BookId" INT REFERENCES "Books"("Id") ON DELETE CASCADE,
            "UserId" INT REFERENCES "Users"("Id") ON DELETE CASCADE,
            "Review" TEXT,
            "Rating" INT DEFAULT 5
         )`);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "Reviews" CASCADE`);
    }

}
