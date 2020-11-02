import * as mongoose from 'mongoose';
import { EntityType } from 'src/resources/database/schemas/entity.schema';

export interface EntityModel extends mongoose.Document {
    identifier: String;
    type: EntityType
    name: String;
}