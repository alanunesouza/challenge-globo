import { Router } from 'express';

import VotarNoParedaoService from '@services/VotarNoParedaoService';

const votosRouter = Router();

votosRouter.post('/', async (request, response) => {
  try {
    const { id_participante } = request.body;

    const votarNoParedao = new VotarNoParedaoService();

    const votos = await votarNoParedao.execute({ id_participante });

    return response.status(201).json(votos);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default votosRouter;
