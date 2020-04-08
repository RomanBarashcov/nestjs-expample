import { MigrationInterface, QueryRunner } from "typeorm";
import { BookSeed } from '../seed/book.seed';
export class SeedBook1586344656771 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner
        .manager
        .createQueryBuilder()
        .insert()
        .into("Books")
        .values(BookSeed)
        .execute();

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
