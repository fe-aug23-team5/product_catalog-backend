'use strict';
import { Response } from "express";

export const instanceNotFound = (res:Response, entity:string) => {
  return res.status(404).json({
    error: `${entity} not found`,
  });
};
