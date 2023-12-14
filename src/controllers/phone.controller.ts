import { ControllerAction } from '../types/ControllerAction';
import * as phoneService from '../services/phone.service';


export const getAll: ControllerAction = async (req, res) => {
  const {count:totalCount, rows:data} = await phoneService.findAll(req.query);
  res.send({totalCount, data});
};

export const getOne: ControllerAction = async (req, res) => {
  const { phoneId } = req.params;

  const phone = await phoneService.getById(phoneId);

  if (!phone) {
    res.sendStatus(404);

    return;
  }
  res.send(phone);
};

export const getNew: ControllerAction = async (req, res) => {
  const phones = await phoneService.findNew();
  if (!phones) {
    res.sendStatus(404);
    return;
  }
  res.send(phones);
};

export const getRecommended: ControllerAction = async (req, res) => {
  const phones = await phoneService.findRecommended();
  res.send(phones);
};

export const getDiscount: ControllerAction = async (req, res) => {
  const phones = await phoneService.findDiscount();
  res.send(phones);
};