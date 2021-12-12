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
    param: Joi.string().required(),
    value: Joi.string().required(),
  }).validate(userRequestObject);
}
