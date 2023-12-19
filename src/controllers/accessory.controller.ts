import { ControllerAction } from '../types/ControllerAction';
import * as accessoryService from '../services/accessory.service';
import { invalidRequestData } from '../utils/invalidRequestData';
import { instanceNotFound } from '../utils/instanceNotFound';

export const getAll: ControllerAction = async (req, res) => {
  const {count:totalCount, rows:data} = await accessoryService.findAll(req.query);
  res.send({totalCount, data});
};

export const getDetailedOne: ControllerAction = async (req, res) => {
  const { itemId } = req.params;

  const product = await accessoryService.getDetailsById(itemId);

  if (!product) {
    return instanceNotFound(res, itemId)
  }
  
  res.send(product);
};

export const getOne: ControllerAction = async (req, res) => {
  const { itemId } = req.params;
  if (isNaN(Number(itemId))) {
    return invalidRequestData(res, itemId);
  }
  const product = await accessoryService.getById(Number(itemId));

  if (!product) {
    return instanceNotFound(res, itemId)
  }
  res.send(product);
};

