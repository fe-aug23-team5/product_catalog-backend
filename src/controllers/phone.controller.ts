import { ControllerAction } from '../types/ControllerAction';
import * as phoneService from '../services/phone.service';
import { invalidRequestData } from '../utils/invalidRequestData';
import { instanceNotFound } from '../utils/instanceNotFound';

export const getAll: ControllerAction = async (req, res) => {
  const { count: totalCount, rows: data } = await phoneService.findAll(
    req.query
  );
  res.send({ totalCount, data });
};

export const getDetailedOne: ControllerAction = async (req, res) => {
  const { itemId } = req.params;

  const product = await phoneService.getDetailsById(itemId);

  if (!product) {
    return instanceNotFound(res, itemId)
  }
  
  res.send(product);
};

export const getOne: ControllerAction = async (req, res) => {
  const { itemId } = req.params;

  const product = await phoneService.getById(itemId);

  if (!product) {
    return instanceNotFound(res, itemId)
  }
  res.send(product);
};
