/**
 * @file
 *
 * @author Nigilan Palanisamy
 * @date 11 Feb 2020
 *
 */
import validateReqBody from '../../validation/update';
import HomeOwner from '../../../db/models/insert';

export default async function updateHomeowner(req, res) {
  if (!req.params.id) {
    return res.status(500).send({ message: 'id not present' });
  }
  const { error } = validateReqBody(req.body);
  if (error) {
    return res.status(500).send({ message: error.details });
  }
  try {
    const update = req.body;
    const filter = req.params;
    await HomeOwner.findOneAndUpdate(filter, update);
    return res.status(204).send({ message: 'Homeowner updated successfully' });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
}
