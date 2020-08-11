import Participante from "@models/Participante";

import { getRepository } from "typeorm";
import Voto from "@models/Voto";

interface Request {
  id_participante: string;
}

class VotarNoParedaoService {
  public async execute({ id_participante }: Request): Promise<Voto> {
    const participantesRepository = getRepository(Participante);
    const votosRepository = getRepository(Voto);

    const participante = await participantesRepository.findOne({
      where: { id: id_participante },
    });

    if (!participante) {
      throw new Error('Esse participante já existe.');
    }

    const voto = votosRepository.create({
      id_participante,
      id_paredao: participante.id_paredao,
    });

    await votosRepository.save(voto);

    return voto;
  }
}

export default VotarNoParedaoService;
