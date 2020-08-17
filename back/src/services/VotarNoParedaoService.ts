import Participante from '@models/Participante';

import { getRepository } from 'typeorm';
import Voto from '@models/Voto';
import Paredao from '@models/Paredao';

interface IRequest {
  id_participante: string;
}

interface IResultado {
  paredao: Paredao;
  resultado: Array<Record<string, any>>;
  totalDeVotos: number;
}

class VotarNoParedaoService {
  public async execute({ id_participante }: IRequest): Promise<IResultado> {
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
      id_paredao: paredao.id,
    });

    await votosRepository.save(voto);

    const participantes = await participantesRepository.find({
      where: { id_paredao: paredao.id },
    });

    const resultado = await Promise.all(
      participantes.map(async (p) => {
        const votosParaParticipante = await votosRepository.find({
          where: {
            id_paredao: paredao.id,
            id_participante: p.id,
          },
        });

        return {
          participante,
          qtdVotos: votosParaParticipante.length,
        };
      }),
    );

    const totalDeVotos = await votosRepository.find({
      where: {
        id_paredao: paredao.id,
      },
    });

    return {
      paredao,
      resultado,
      totalDeVotos: totalDeVotos.length,
    };
  }
}

export default VotarNoParedaoService;
