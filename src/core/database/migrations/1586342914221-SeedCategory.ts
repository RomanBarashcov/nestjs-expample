import { MigrationInterface, QueryRunner } from "typeorm";
import { CategorySeed } from '../seed/category.seed';

export class SeedCategory1586342914221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner
        .manager
        .createQueryBuilder()
        .insert()
        .into("Categories")
        .values(CategorySeed)
        .execute();

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
