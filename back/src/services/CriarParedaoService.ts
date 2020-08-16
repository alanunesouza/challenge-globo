import Paredao from '@models/Paredao';

import { getRepository } from 'typeorm';

class CriarParedaoService {
  public async execute(): Promise<Paredao> {
    const paredaosRepository = getRepository(Paredao);

    const checkParedaoActive = await paredaosRepository.findOne({
      where: { ativo: true },
    });

    if (checkParedaoActive) {
      throw new Error(
        'Já existe um paredão em aberto. Para criar um novo paredão, é necessário que o outro seja encerrado.',
      );
    }

    const paredao = paredaosRepository.create();

    await paredaosRepository.save(paredao);

    return paredao;
  }
}

export default CriarParedaoService;
