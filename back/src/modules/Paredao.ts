import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";

import Participante from './Participante';

@Entity('paredao')
class Paredao {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ativo: boolean;

  @Column()
  participante_id: string;

  @OneToMany(() => Participante, participante => participante.id)
  @JoinColumn({ name: 'participante_id' })
  participante: Participante;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Paredao;
