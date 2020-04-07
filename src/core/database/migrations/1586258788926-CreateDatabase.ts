import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1586258788926 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query(`CREATE DATABASE IF NOT EXISTS project_test_db`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query(`DROP DATABASE project_test_db`);
    }

}
