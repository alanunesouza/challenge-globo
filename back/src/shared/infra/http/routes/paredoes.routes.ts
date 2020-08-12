import { Router } from 'express';

import CriarParedaoService from 'services/CriarParedaoService';
import BuscarParedaoAtivoService from 'services/BuscarParedaoAtivoService';

const paredaosRouter = Router();

paredaosRouter.post('/', async (request, response) => {
  try {
    const criarParedao = new CriarParedaoService();

    const paredao = await criarParedao.execute()

    return response.json(paredao);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

paredaosRouter.get('/', async (request, response) => {
  try {
    const buscarParedao = new BuscarParedaoAtivoService();

    const paredao = await buscarParedao.execute()

    return response.json(paredao);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default paredaosRouter;
