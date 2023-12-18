import { ControllerAction } from '../types/ControllerAction';
import * as generalService from '../services/general.service';

export const getNew: ControllerAction = async (req, res) => {
    const products = await generalService.findNew();
    if (!products) {
      res.sendStatus(404);
      return;
    }
    res.send(products);
  };
  
  export const getRecommended: ControllerAction = async (req, res) => {
    const products = await generalService.findRecommended();
    res.send(products);
  };
  
  export const getDiscount: ControllerAction = async (req, res) => {
    const products = await generalService.findDiscount();
    res.send(products);
  };