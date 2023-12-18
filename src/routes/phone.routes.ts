import { Router } from 'express';
import * as phoneController from '../controllers/phone.controller'

export const phoneRouter = Router();

phoneRouter.get('/:itemId', phoneController.getOne);
phoneRouter.get('/', phoneController.getAll);

