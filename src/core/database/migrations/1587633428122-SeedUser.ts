import {MigrationInterface, QueryRunner} from "typeorm";
import { UserSeed } from "../seed/user.seed";

export class SeedUser1587633428122 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner
        .manager
        .createQueryBuilder()
        .insert()
        .into("Users")
        .values(UserSeed)
        .execute();

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
