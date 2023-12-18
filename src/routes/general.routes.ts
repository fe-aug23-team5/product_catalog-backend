import { Router } from 'express';
import * as generalController from '../controllers/general.controller'

export const generalRouter = Router();


generalRouter.get('/discount', generalController.getDiscount);
generalRouter.get('/new', generalController.getNew);
generalRouter.get('/recommended', generalController.getRecommended);