import { ControllerAction } from '../types/ControllerAction';
import * as tabletService from '../services/tablet.service';


export const getAll: ControllerAction = async (req, res) => {
  const {count:totalCount, rows:data} = await tabletService.findAll(req.query);
  res.send({totalCount, data});
};

export const getOne: ControllerAction = async (req, res) => {
  const { itemId } = req.params;

  const product = await tabletService.getById(itemId);

  if (!product) {
    res.sendStatus(404);

    return;
  }
  res.send(product);
};