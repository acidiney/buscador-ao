import * as mongoose from 'mongoose';

export enum EntityType {
  bi = 'BI',
  nif = 'NIF',
}

export const EntitySchema = new mongoose.Schema({
    identifier: String,
    name: String,
    type: {
      type: String,
      enum: ['BI', 'NIF'],
      default: 'BI'
    },
    created_at: Date
});
