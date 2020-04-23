import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedBook1586344656771 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.query(`INSERT INTO public."Books" (title, description, cover, price, "categoryId")
        VALUES('Title1', 'Description1', 'Cover1', 100, 3),
        ('Title2', 'Description3', 'Cover2', 200, 1), 
        ('Title3', 'Description3', 'Cover3', 300, 2);`);


    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
