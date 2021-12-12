/**
 * @file
 *
 * @author Nigilan Palanisamy
 * @date 11 Feb 2020
 *
 */
import validateReqBody from '../../validation/delete';
import HomeOwner from '../../../db/models/insert';

export default async function deleteHomeowner(req, res) {
  const { error } = validateReqBody(req.body);
  if (error) {
    return res.status(500).send({ message: error.details });
  }
  try {
    const deleteOutput = await HomeOwner.deleteMany({ id: req.body });
    if (deleteOutput.deletedCount === 0) {
      return res.status(500).send({ message: 'Specified id/ids not found' });
    }
    if (deleteOutput.deletedCount === 1) {
      return res.status(200).send({ message: 'One homeowner is deleted' });
    }
    return res.status(200).send({ message: 'Multiple Homeowner details deleted' });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
}
