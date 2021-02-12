import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ExameTable1613099904650 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "exams_type_enum" AS ENUM('online', 'presential')`,
    );
    await queryRunner.createTable(
      new Table({
        name: 'exams_tb',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'enum',
            enumName: 'exams_type_enum',
            default: "'online'",
          },
          {
            name: 'questions',
            type: 'json',
            isNullable: true,
            default: null,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('exams_tb');
  }
}
