import express, { Router } from 'express';
import * as phoneController from '../controllers/phone.controller'

export const phoneRouter = Router();

phoneRouter.get('/', phoneController.getAll);

phoneRouter.get('/:phoneId', phoneController.getOne);

