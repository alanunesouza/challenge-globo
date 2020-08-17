import { getRepository } from 'typeorm';

import Paredao from '@models/Paredao';
import Participante from '@models/Participante';

interface IRequest {
  id_paredao: string;
}

class IniciarParedaoService {
  public async execute({ id_paredao }: IRequest): Promise<Paredao> {
    const paredoesRepository = getRepository(Paredao);
    const participantesRepository = getRepository(Participante);

    const paredao = await paredoesRepository.findOne({
      where: { id: id_paredao },
    });

    if (!paredao) {
      throw new Error('Paredão não encontrado.');
    }

    if (!paredao?.ativo) {
      throw new Error('Esse paredão já foi encerrado.');
    }

    if (paredao?.iniciado) {
      throw new Error('Paredão já foi iniciado.');
    }

    const participantes = await participantesRepository.find({
      where: { id_paredao: paredao.id },
    });

    if (participantes.length < 2) {
      throw new Error(
        'Paredão precisa de pelo menos 2 participantes para ser iniciado.',
      );
    }

    paredao.iniciado = true;

    await paredoesRepository.save(paredao);

    return paredao;
  }
}

export default IniciarParedaoService;
