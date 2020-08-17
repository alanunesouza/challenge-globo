import { Router } from 'express';

import ConsultarParticipantes from '@services/ConsultarParticipantesService';
import CriarParticipante from '@services/CriarParticipanteService';
import AddParticipanteParedao from '@services/AddParticipanteParedaoService';
import RemoverParticipanteParedao from '@services/RemoverParticipanteParedaoService';

const participantesRouter = Router();

participantesRouter.get('/', async (request, response) => {
  try {
    const consultarParticipantes = new ConsultarParticipantes();

    const participantes = await consultarParticipantes.execute();

    return response.json(participantes);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

participantesRouter.post('/', async (request, response) => {
  try {
    const { nome, data_nasc } = request.body;

    const criarParticipante = new CriarParticipante();

    const participante = await criarParticipante.execute({
      nome,
      data_nasc,
    });

    return response.status(201).json(participante);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

participantesRouter.put('/', async (request, response) => {
  try {
    const { id_participante } = request.body;

    const addParticipanteParedao = new AddParticipanteParedao();

    const participante = await addParticipanteParedao.update({
      id_participante,
    });

    return response.json(participante);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

participantesRouter.put('/remover', async (request, response) => {
  try {
    const { id_participante } = request.body;

    const removerParticipanteParedao = new RemoverParticipanteParedao();

    const participante = await removerParticipanteParedao.update({
      id_participante,
    });

    return response.json(participante);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default participantesRouter;
