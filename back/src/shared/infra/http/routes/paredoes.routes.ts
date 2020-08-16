import { Router } from 'express';

import CriarParedaoService from '@services/CriarParedaoService';
import BuscarParedaoAtivoService from '@services/BuscarParedaoAtivoService';
import BuscarResultadoDoParedaoService from '@services/BuscarResultadoDoParedaoService';

const paredaosRouter = Router();


paredaosRouter.post('/', async (request, response) => {
  try {
    const criarParedao = new CriarParedaoService();

    const paredao = await criarParedao.execute();

    return response.json(paredao);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

paredaosRouter.get('/', async (request, response) => {
  try {
    const buscarParedao = new BuscarParedaoAtivoService();

    const paredao = await buscarParedao.execute();

    return response.json(paredao);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

paredaosRouter.get('/resultado', async (request, response) => {
  try {
    const idParedao = request.query.idParedao as string;

    const buscarResultadoDoParedao = new BuscarResultadoDoParedaoService();

    const resultadoDoParedao = await buscarResultadoDoParedao.execute(idParedao);

    return response.json(resultadoDoParedao);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default paredaosRouter;
