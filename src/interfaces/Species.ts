import {Point} from 'geojson';
import {Document, Types} from 'mongoose';
import {Category} from './Category';

interface Species extends Document {
  species_name: string;
  category: Types.ObjectId;
  image: string;
  location: Point;
}

interface SpeciesOutput {
  species_name: string;
  category: Types.ObjectId;
}

export {Species, SpeciesOutput};
