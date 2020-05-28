import * as mongoose from 'mongoose';

export interface EntityModel extends mongoose.Document {
    nif: String;
    name: String;
}