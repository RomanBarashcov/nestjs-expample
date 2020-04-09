import { MigrationInterface, QueryRunner} from "typeorm";

export class Books1586272664510 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(`CREATE TABLE "Books" (
            "id" SERIAL PRIMARY KEY,
            "title" VARCHAR(50) NOT NULL,
            "description" TEXT NOT NULL,
            "cover" VARCHAR(255),
            "price" INT DEFAULT 0,
            "categoryId" INT REFERENCES "Categories"("id") ON DELETE CASCADE
         )`);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "Books" CASCADE`);
    }

}
