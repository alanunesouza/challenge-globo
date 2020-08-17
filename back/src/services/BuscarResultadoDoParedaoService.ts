import { getRepository } from 'typeorm';

import Paredao from '@models/Paredao';
import Participante from '@models/Participante';
import Voto from '@models/Voto';

class BuscarResultadoDoParedaoService {
  public async execute(idParedao: string): Promise<any> {
    const paredoesRepository = getRepository(Paredao);
    const participantesRepository = getRepository(Participante);
    const votoRepository = getRepository(Voto);

    const paredao = await paredoesRepository.findOne({
      where: { id: idParedao },
    });

    if (!paredao) {
      throw Error('Esse paredão não existe.');
    }

    const participantes = await participantesRepository.find({
      where: { id_paredao: idParedao },
    });

    const resultado = await Promise.all(
      participantes.map(async (participante) => {
        const votosParaParticipante = await votoRepository.find({
          where: {
            id_paredao: idParedao,
            id_participante: participante.id,
          },
        });

        return {
          participante,
          qtdVotos: votosParaParticipante.length,
        };
      }),
    );

    return {
      ...paredao,
      resultado,
    };
  }
}

export default BuscarResultadoDoParedaoService;
