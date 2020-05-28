import * as mongoose from 'mongoose';

export const EntitySchema = new mongoose.Schema({
    nif: String,
    name: String,
    created_at: Date
});