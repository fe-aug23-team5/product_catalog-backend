import { ControllerAction } from '../types/ControllerAction';
import * as tabletService from '../services/tablet.service';
import { invalidRequestData } from '../utils/invalidRequestData';
import { instanceNotFound } from '../utils/instanceNotFound';

export const getAll: ControllerAction = async (req, res) => {
  const { count: totalCount, rows: data } = await tabletService.findAll(
    req.query
  );
  res.send({ totalCount, data });
};

export const getDetailedOne: ControllerAction = async (req, res) => {
  const { itemId } = req.params;

  const product = await tabletService.getDetailsById(itemId);

  if (!product) {
    return instanceNotFound(res, itemId)
  }

  res.send(product);
};

export const getOne: ControllerAction = async (req, res) => {
  const { itemId } = req.params;

  const product = await tabletService.getById(itemId);

  if (!product) {
    return instanceNotFound(res, itemId)
  }
  res.send(product);
};
