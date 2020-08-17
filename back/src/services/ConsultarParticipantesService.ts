import Participante from '@models/Participante';

import { getRepository } from 'typeorm';

class ConsultarParticipantesService {
  public async execute(): Promise<Array<Participante>> {
    const participantesRepository = getRepository(Participante);

    const participantes = await participantesRepository.find();

    return participantes;
  }
}

export default ConsultarParticipantesService;
