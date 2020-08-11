import Paredao from "@models/Paredao";

import { getRepository, createQueryBuilder } from "typeorm";
import Participante from "@models/Participante";

interface Request {
  id_participante: string;
}

class AddParticipanteParedaoService {
  public async update({ id_participante }: Request): Promise<Participante> {
    const paredaosRepository = getRepository(Paredao);
    const participantesRepository = getRepository(Participante);

    const paredaoActive = await paredaosRepository.findOne({
      where: { ativo: true },
    });

    if (!paredaoActive) {
      throw new Error('Não existe paredão em aberto. Para adicionar o participante, é necessária a criação de um paredão.');
    }

    const participante = await participantesRepository.findOne({
      where: { id: id_participante }
    })

    if (!participante) {
      throw new Error('Participante inválido.');
    }

    if (participante.eliminado) {
      throw new Error('Participante já está eliminado.');
    }


    participante.id_paredao = paredaoActive.id;

    await participantesRepository.save(participante);

    return participante;
  }
}

export default AddParticipanteParedaoService;
