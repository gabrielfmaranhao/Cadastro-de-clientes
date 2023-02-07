import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1675660434515 implements MigrationInterface {
    name = 'createTables1675660434515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "email" DROP CONSTRAINT "FK_a1c5900409b7215d8aa59c03c8b"`);
        await queryRunner.query(`ALTER TABLE "telefone" DROP CONSTRAINT "FK_e808dcdf3481e353bda0ef2fe8e"`);
        await queryRunner.query(`ALTER TABLE "email" ADD CONSTRAINT "FK_a1c5900409b7215d8aa59c03c8b" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "telefone" ADD CONSTRAINT "FK_e808dcdf3481e353bda0ef2fe8e" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "telefone" DROP CONSTRAINT "FK_e808dcdf3481e353bda0ef2fe8e"`);
        await queryRunner.query(`ALTER TABLE "email" DROP CONSTRAINT "FK_a1c5900409b7215d8aa59c03c8b"`);
        await queryRunner.query(`ALTER TABLE "telefone" ADD CONSTRAINT "FK_e808dcdf3481e353bda0ef2fe8e" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "email" ADD CONSTRAINT "FK_a1c5900409b7215d8aa59c03c8b" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
