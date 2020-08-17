import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import Participante from './Participante';
import Paredao from './Paredao';

@Entity('votos')
class Voto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_participante: string;

  @OneToOne(() => Participante)
  @JoinColumn({ name: 'id_participante' })
  participante: Participante;

  @Column()
  id_paredao: string;

  @OneToOne(() => Paredao)
  @JoinColumn({ name: 'id_paredao' })
  paredao: Participante;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Voto;
