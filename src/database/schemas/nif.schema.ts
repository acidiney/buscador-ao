import * as mongoose from 'mongoose';

export const NifSchema = new mongoose.Schema({
    nif: String,
    name: String,
    created_at: Date
});