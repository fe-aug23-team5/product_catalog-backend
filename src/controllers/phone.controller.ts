import { ControllerAction } from '../types/ControllerAction';
import * as phoneService from '../services/phone.service';

export const getAll: ControllerAction = async (req, res) => {
  const { count: totalCount, rows: data } = await phoneService.findAll(
    req.query
  );
  res.send({ totalCount, data });
};

export const getOne: ControllerAction = async (req, res) => {
  const { itemId } = req.params;

  const product = await phoneService.getById(itemId);

  if (!product) {
    res.sendStatus(404);

    return;
  }
  res.send(product);
};
