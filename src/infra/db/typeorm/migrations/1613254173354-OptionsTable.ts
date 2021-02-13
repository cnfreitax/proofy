import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class OptionsTable1613254173354 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'options_tb',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'value',
            type: 'varchar',
          },
          {
            name: 'correct',
            type: 'boolean',
            default: 'false',
          },
          {
            name: 'question_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'QUESTIOS_FK',
            referencedTableName: 'questions_tb',
            referencedColumnNames: ['id'],
            columnNames: ['question_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('options_tb');
  }
}
