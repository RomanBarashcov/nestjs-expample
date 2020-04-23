import {MigrationInterface, QueryRunner} from "typeorm";
import { RoleSeed } from "../seed/role.seed";

export class SeedRoles1587633269629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner
        .manager
        .createQueryBuilder()
        .insert()
        .into("Roles")
        .values(RoleSeed)
        .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
