import Participante from '@models/Participante';

import { getRepository } from 'typeorm';

interface IRequest {
  nome: string;
  data_nasc: Date;
}

class CriarParticipanteService {
  public async execute({ nome, data_nasc }: IRequest): Promise<Participante> {
    const participantesRepository = getRepository(Participante);

    const checkParticipanteExists = await participantesRepository.findOne({
      where: { data_nasc, nome },
    });

    if (checkParticipanteExists) {
      throw new Error('Esse participante já existe.');
    }

    const participante = participantesRepository.create({
      nome,
      data_nasc,
    });

    await participantesRepository.save(participante);

    return participante;
  }
}

export default CriarParticipanteService;
