/**
 * @file
 *
 *
 * @author Nigilan Palanisamy
 * @date 11 Dec 2021
 *
 */
import mongoose from '../../services/mongodb';

const AddressSchema = mongoose.Schema({ lat: Number, lng: Number });

const HomeOwner = mongoose.model('HomeOwner', {
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  profession: {
    type: String,
  },
  address: {
    type: AddressSchema,
  },
});

export default HomeOwner;
