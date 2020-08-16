import { Router } from 'express';
import CriarParticipanteService from '@services/CriarParticipanteService';
import AddParticipanteParedaoService from '@services/AddParticipanteParedaoService';

const participantesRouter = Router();

participantesRouter.post('/', async (request, response) => {
  try {
    const { nome, data_nasc } = request.body;

    const criarParticipante = new CriarParticipanteService();

    const participante = await criarParticipante.execute({
      nome,
      data_nasc,
    });

    return response.json(participante);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

participantesRouter.put('/', async (request, response) => {
  try {
    const { id_participante } = request.body;

    const addParticipanteParedao = new AddParticipanteParedaoService();

    const paredao = await addParticipanteParedao.update({
      id_participante,
    });

    return response.json(paredao);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default participantesRouter;
