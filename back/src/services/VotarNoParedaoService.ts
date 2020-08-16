import Participante from '@models/Participante';

import { getRepository } from 'typeorm';
import Voto from '@models/Voto';
import Paredao from '@models/Paredao';

interface Request {
  id_participante: string;
}

interface Resultado {
  paredao: Paredao,
  resultado: Array<Object>
  totalDeVotos: Number,
}

class VotarNoParedaoService {
  public async execute({ id_participante }: Request): Promise<Resultado> {
    const participantesRepository = getRepository(Participante);
    const votosRepository = getRepository(Voto);
    const paredaoRepository = getRepository(Paredao);

    const participante = await participantesRepository.findOne({
      where: { id: id_participante },
    });

    if (!participante) {
      throw new Error('Esse participante não existe.');
    }

    const paredao = await paredaoRepository.findOne({
      where: { id: participante.id_paredao },
    });

    if (!paredao) {
      throw new Error('Participante não está no paredão.');
    }

    const voto = votosRepository.create({
      id_participante,
      id_paredao: participante.id_paredao,
    });

    await votosRepository.save(voto);

    const participantes = await participantesRepository.find({
      where: { id_paredao: paredao.id },
    });

    const resultado = await Promise.all(participantes.map(async participante => {
      const votosParaParticipante = await votosRepository.find({
        where: {
          id_paredao: paredao.id,
          id_participante: participante.id
        }
      });

      return {
        participante,
        qtdVotos: votosParaParticipante.length
      };
    }));

    const totalDeVotos = await votosRepository.find({
      where: {
        id_paredao: paredao.id
      }
    });

    return {
      paredao,
      resultado,
      totalDeVotos: totalDeVotos.length,
    };
  }
}

export default VotarNoParedaoService;
