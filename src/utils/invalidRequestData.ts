'use strict';
import { Response } from "express";

export const invalidRequestData = (res:Response, field:string|number) => {
  return res.status(400).json({
    error: `Invalid request data at '${field}'.`,
  });
};
