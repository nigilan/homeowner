/**
 * @file
 *
 * @author Nigilan Palanisamy
 * @date 11 Feb 2020
 *
 */
import {
  convertXMLToJSON,
  geocoding,
  yearCalculator,
} from '../../../helpers';
import HomeOwner from '../../../db/models/insert';

export default async function createHomeowner(req, res) {
  if (req.file.mimetype !== 'text/xml') {
    return res.status(500).send({ message: 'Upload only XML files' });
  }
  const data = Buffer.from(req.file.buffer, 'utf8');
  try {
    const jsonData = await convertXMLToJSON(data.toString());
    const address = jsonData.root.address[0];
    const geoc = await geocoding(address, process.env.geocodeioApiKey);
    const geoCodingAddress = geoc.results[0].location;
    const dob = jsonData.root.dob[0];
    const age = yearCalculator(dob);
    const profession = jsonData.root.profession[0];
    const newHomeowner = new HomeOwner({
      id: jsonData.root.id[0],
      name: jsonData.root.name[0],
      age: Math.round(age),
      profession,
      address: geoCodingAddress,
    });
    await newHomeowner.save();
    return res.status(201).send({ message: 'New Homeowner added successfully' });
  } catch (e) {
    return res.status(500).send({ message: e });
  }
}
