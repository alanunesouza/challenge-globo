import { getRepository } from 'typeorm';

import Paredao from '@models/Paredao';
import Participante from '@models/Participante';
import Voto from '@models/Voto';

interface IRequest {
  id_paredao: string;
}

class EncerrarParedaoService {
  public async execute({ id_paredao }: IRequest): Promise<Paredao> {
    const paredoesRepository = getRepository(Paredao);
    const participantesRepository = getRepository(Participante);
    const votosRepository = getRepository(Voto);

    const paredao = await paredoesRepository.findOne({
      where: { id: id_paredao },
    });

    if (!paredao) {
      throw new Error('Paredão não encontrado.');
    }

    if (!paredao?.ativo) {
      throw new Error('Esse paredão já foi encerrado.');
    }

    if (!paredao?.iniciado) {
      throw new Error('Paredão ainda não foi iniciado.');
    }

    const participantes = await participantesRepository.find({
      where: { id_paredao: paredao.id },
    });

    const resultado = await Promise.all(
      participantes.map(async (participante) => {
        const votosParaParticipante = await votosRepository.find({
          where: {
            id_paredao: paredao.id,
            id_participante: participante.id,
          },
        });

        return {
          participante,
          qtdVotos: votosParaParticipante.length,
        };
      }),
    );

    let eliminado = resultado[0];

    await resultado.forEach(async (r) => {
      if (r.qtdVotos > eliminado.qtdVotos) {
        eliminado = r;
      }

      const { participante } = r;
      participante.id_paredao = null;
      await paredoesRepository.save(participante);
    });

    const { participante } = eliminado;

    participante.eliminado = true;
    paredao.ativo = false;

    await participantesRepository.save(participante);
    await paredoesRepository.save(paredao);

    return paredao;
  }
}

export default EncerrarParedaoService;
