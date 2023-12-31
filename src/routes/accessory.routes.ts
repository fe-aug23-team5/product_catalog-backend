import { Router } from 'express';
import * as accessoryController from '../controllers/accessory.controller'

export const accessoryRouter = Router();

accessoryRouter.get('/details/:itemId', accessoryController.getDetailedOne);
accessoryRouter.get('/:itemId', accessoryController.getOne);
accessoryRouter.get('/', accessoryController.getAll);
