import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterParedaoIniciado1597615880867
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'paredoes',
      new TableColumn({
        name: 'iniciado',
        type: 'boolean',
        default: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('paredoes', 'iniciado');
  }
}
