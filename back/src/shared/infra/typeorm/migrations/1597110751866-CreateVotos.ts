import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateVotos1597110751866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'votos',
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
              generationStrategy: "uuid",
              default: "uuid_generate_v4()",
            },
            {
              name: 'id_paredao',
              type: 'uuid',
            },
            {
              name: 'id_participante',
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

      await queryRunner.createForeignKey('votos', new TableForeignKey({
        name: 'IdParticipanteVoto',
        columnNames: ['id_participante'],
        referencedColumnNames: ['id'],
        referencedTableName: 'participantes',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      }));

      await queryRunner.createForeignKey('votos', new TableForeignKey({
        name: 'IdParedaoVoto',
        columnNames: ['id_paredao'],
        referencedColumnNames: ['id'],
        referencedTableName: 'paredoes',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('votos', 'IdParedaoVoto');

      await queryRunner.dropForeignKey('votos', 'IdParticipanteVoto');

      await queryRunner.dropTable('votos');
    }

}
