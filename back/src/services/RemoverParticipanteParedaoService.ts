import { getRepository } from 'typeorm';

import Participante from '@models/Participante';
import Paredao from '@models/Paredao';

interface IRequest {
  id_participante: string;
}

class RemoverParticipanteParedaoService {
  public async update({ id_participante }: IRequest): Promise<Participante> {
    const participantesRepository = getRepository(Participante);
    const paredoesRepository = getRepository(Paredao);

    const participante = await participantesRepository.findOne({
      where: { id: id_participante },
    });

    if (!participante) {
      throw new Error('Não foi encontrado nenhum participante.');
    }

    if (participante.eliminado) {
      throw new Error('Participante já foi eliminado.');
    }

    if (!participante.id_paredao) {
      throw new Error('Participante não está emparedado.');
    }

    const paredao = await paredoesRepository.findOne({
      where: { id: participante.id_paredao },
    });

    if (paredao?.iniciado) {
      throw new Error('Paredão já foi iniciado.');
    }

    participante.id_paredao = null;

    await participantesRepository.save(participante);

    return participante;
  }
}

export default RemoverParticipanteParedaoService;
