import { Router } from 'express';

import ParticipantesRouter from './participantes.routes';
import ParedoesRouter from './paredoes.routes';
import votosRouter from './votos.routes';

const routes = Router();

routes.use('/participantes', ParticipantesRouter);
routes.use('/paredoes', ParedoesRouter);
routes.use('/votos', votosRouter);

export default routes;
