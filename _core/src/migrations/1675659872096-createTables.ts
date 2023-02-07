import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1675659872096 implements MigrationInterface {
    name = 'createTables1675659872096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying(120) NOT NULL, "password" character varying(120) NOT NULL, "cpf" character varying(11) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_6ccff37176a6978449a99c82e10" UNIQUE ("username"), CONSTRAINT "UQ_28cd8597e57c8197d4929a98e7a" UNIQUE ("cpf"), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "email" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(256) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "clienteId" uuid, CONSTRAINT "UQ_fee9013b697946e8129caba8983" UNIQUE ("email"), CONSTRAINT "PK_1e7ed8734ee054ef18002e29b1c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "telefone" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "telefone" character varying(15) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "clienteId" uuid, CONSTRAINT "UQ_107a4f130e6dd87c45454126986" UNIQUE ("telefone"), CONSTRAINT "PK_6b27db34d6da7b23e8680a55fd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cliente" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome_completo" character varying(150) NOT NULL, "cpf" character varying(11) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "criado_por" character varying(120) NOT NULL, "usuarioId" uuid, CONSTRAINT "UQ_980ea33e938c719bbababe43526" UNIQUE ("cpf"), CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "email" ADD CONSTRAINT "FK_a1c5900409b7215d8aa59c03c8b" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "telefone" ADD CONSTRAINT "FK_e808dcdf3481e353bda0ef2fe8e" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD CONSTRAINT "FK_26eb6132b607fd16d904df0367d" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cliente" DROP CONSTRAINT "FK_26eb6132b607fd16d904df0367d"`);
        await queryRunner.query(`ALTER TABLE "telefone" DROP CONSTRAINT "FK_e808dcdf3481e353bda0ef2fe8e"`);
        await queryRunner.query(`ALTER TABLE "email" DROP CONSTRAINT "FK_a1c5900409b7215d8aa59c03c8b"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "telefone"`);
        await queryRunner.query(`DROP TABLE "email"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
