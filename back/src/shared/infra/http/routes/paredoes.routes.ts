import { Router } from 'express';

import CriarParedao from '@services/CriarParedaoService';
import IniciarParedao from '@services/IniciarParedaoService';
import EncerrarParedao from '@services/EncerrarParedaoService';
import BuscarParedaoAtivoIniciado from '@services/BuscarParedaoAtivoIniciadoService';
import BuscarResultadoDoParedao from '@services/BuscarResultadoDoParedaoService';

const paredoesRouter = Router();

paredoesRouter.post('/', async (request, response) => {
  try {
    const criarParedao = new CriarParedao();

    const paredao = await criarParedao.execute();

    return response.status(201).json(paredao);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

paredoesRouter.put(
  '/iniciar/paredao/:id_paredao',
  async (request, response) => {
    try {
      const { id_paredao } = request.params;
      const iniciarParedao = new IniciarParedao();

      const paredao = await iniciarParedao.execute({ id_paredao });

      return response.json(paredao);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
);

paredoesRouter.put(
  '/encerrar/paredao/:id_paredao',
  async (request, response) => {
    try {
      const { id_paredao } = request.params;
      const iniciarParedao = new EncerrarParedao();

      const paredao = await iniciarParedao.execute({ id_paredao });

      return response.json(paredao);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
);

paredoesRouter.get('/', async (request, response) => {
  try {
    const buscarParedao = new BuscarParedaoAtivoIniciado();

    const paredao = await buscarParedao.execute();

    return response.json(paredao);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

paredoesRouter.get('/resultado', async (request, response) => {
  try {
    const idParedao = request.query.idParedao as string;

    const buscarResultadoDoParedao = new BuscarResultadoDoParedao();

    const resultadoDoParedao = await buscarResultadoDoParedao.execute(
      idParedao,
    );

    return response.json(resultadoDoParedao);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default paredoesRouter;
