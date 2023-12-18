import { ControllerAction } from '../types/ControllerAction';
import * as accessoryService from '../services/accessory.service';

export const getAll: ControllerAction = async (req, res) => {
  const {count:totalCount, rows:data} = await accessoryService.findAll(req.query);
  res.send({totalCount, data});
};

export const getOne: ControllerAction = async (req, res) => {
  const { itemId } = req.params;

  const product = await accessoryService.getById(itemId);

  if (!product) {
    res.sendStatus(404);

    return;
  }
  res.send(product);
};

