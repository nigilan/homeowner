/**
 * @file
 *
 * @author Nigilan P
 * @date 11 Dec 2021
 *
 */
import Joi from 'joi';

export default function validateReqBody(userRequestObject) {
  return Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    profession: Joi.string().required(),
    address: Joi.object({
      lat: Joi.number().required(),
      lng: Joi.number().required(),
    }).required(),
  }).validate(userRequestObject);
}
