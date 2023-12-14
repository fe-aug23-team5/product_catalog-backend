import { Router } from 'express';
import * as phoneController from '../controllers/phone.controller'

export const phoneRouter = Router();

phoneRouter.get('/discount', phoneController.getDiscount);
phoneRouter.get('/new', phoneController.getNew);
phoneRouter.get('/recommended', phoneController.getRecommended);
phoneRouter.get('/:phoneId', phoneController.getOne);
phoneRouter.get('/', phoneController.getAll);

