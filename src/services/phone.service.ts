import { Phone } from "../models/Phone";

export const findAll = async () => Phone.findAll();

export const getById = async (id: string): Promise<Phone | null> => (
  Phone.findByPk(id)
);

