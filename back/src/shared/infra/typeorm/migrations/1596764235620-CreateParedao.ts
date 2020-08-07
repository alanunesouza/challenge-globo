import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateParedao1596764235620 implements MigrationInterface {


  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'paredoes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'ativo',
            type: 'boolean',
          },
          {
            name: 'participante_id',
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
          }
        ]
      })
    );

    await queryRunner.createForeignKey('paredoes', new TableForeignKey({
      name: 'ParticipanteParedao',
      columnNames: ['participante_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'participantes',
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('paredoes', 'ParticipanteParedao');

    await queryRunner.dropTable('paredoes');
  }

}
