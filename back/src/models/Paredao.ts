import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';

@Entity('paredoes')
class Paredao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ativo: boolean;

  @Column()
  iniciado: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  defaultValues() {
    this.ativo = true;
  }
}

export default Paredao;
