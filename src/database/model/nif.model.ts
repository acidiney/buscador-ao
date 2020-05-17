import * as mongoose from 'mongoose';

export interface NifModel extends mongoose.Document {
    nif: String;
    name: String;
}