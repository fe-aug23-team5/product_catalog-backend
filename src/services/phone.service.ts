import { Phone } from "../models/Phone";
import { PhoneDetails } from "../models/PhoneDetails";

export const findAll = async () => Phone.findAll();

export const getById = async (id: string): Promise<PhoneDetails | null> => (
  PhoneDetails.findByPk(id)
);