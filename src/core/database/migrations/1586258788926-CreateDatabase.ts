import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1586258788926 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
       //await queryRunner.query("CREATE DATABASE project_test_db");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        //await queryRunner.query("DROP DATABASE project_test_db");
    }

}
