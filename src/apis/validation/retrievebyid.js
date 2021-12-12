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
    id: Number,
  }).validate(userRequestObject);
}
