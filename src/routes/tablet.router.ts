import { Router } from 'express';
import * as tabletController from '../controllers/tablet.controller'

export const tabletRouter = Router();

tabletRouter.get('/details/:itemId', tabletController.getDetailedOne);
tabletRouter.get('/:itemId', tabletController.getOne);
tabletRouter.get('/', tabletController.getAll);

