/**
 * @file
 *
 * @author Nigilan Palanisamy
 * @date 11 Feb 2020
 *
 */
import validateReqParams from '../../validation/retrievebyparam';
import HomeOwner from '../../../db/models/insert';

export default async function retrieveByParam(req, res) {
  const { error } = validateReqParams(req.params);
  if (error) {
    return res.status(500).send({ message: 'Invalid input' });
  }
  const { param, value } = req.params;
  try {
    const list = {
      _id: 0, name: 1, age: 1, profession: 1, id: 1, address: 1,
    };
    const searchObject = {};
    searchObject[param] = value;
    const homeownerData = await HomeOwner.find(searchObject, list);
    if (homeownerData.length < 1) {
      return res.status(404).send({ message: 'No homeowners found' });
    }
    return res.status(200).send({ message: 'value retrieved for homeowner', data: homeownerData });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
}
