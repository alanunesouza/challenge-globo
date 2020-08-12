import Paredao from "@models/Paredao";

import { getRepository } from "typeorm";
import Participante from "@models/Participante";


class BuscarParedaoAtivoService {
  public async execute(): Promise<any> {
    const paredoesRepository = getRepository(Paredao);
    const participantesRepository = getRepository(Participante);

    const paredaoAtivo = await paredoesRepository.findOne({
      where: { ativo: true },
    });

    if (!paredaoAtivo) {
      throw new Error('Votação encerrada. Aguarde o próximo paredão');
    }

    const participantes = await participantesRepository.find({
      where: { id_paredao: paredaoAtivo.id }
    });

    if (participantes.length < 2) {
      throw new Error('Paredão está em formação.');
    }

    return {
      ...paredaoAtivo,
      participantes,
    };
  }
}

export default BuscarParedaoAtivoService;
