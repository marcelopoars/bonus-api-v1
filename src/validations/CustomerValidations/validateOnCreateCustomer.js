import { defaultCustomerValidations } from "./defaultCustomerValidations.js";

export function validateOnCreateCustomer(name, cpf, city, phone) {
  if (!name || !cpf || !city || !phone)
    throw {
      status: 400,
      message: 'All fields are required',
    };

  defaultCustomerValidations(name, cpf, city, phone);
}