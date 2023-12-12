import { ControllerAction } from '../types/ControllerAction';
import express from 'express';
import * as phoneService from '../services/phone.service';

export const getAll: ControllerAction = async (req, res) => {
  const phones = await phoneService.findAll();

  res.send(phones);
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