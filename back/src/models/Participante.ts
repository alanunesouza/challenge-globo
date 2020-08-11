import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany, JoinColumn } from "typeorm";
import Paredao from "./Paredao";

@Entity('participantes')
class Participante {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  data_nasc: Date;

  @Column()
  eliminado: boolean;

  @Column()
  id_paredao: string;

  @OneToMany(() => Paredao, paredao => paredao.id)
  @JoinColumn({ name: 'id_paredao' })
  participante: Participante;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  defaultValues() {
    this.eliminado = false;
  }
}

export default Participante;
