import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Provinces extends Document {
    @Prop({ unique: true })
    name: string;

    @Prop({ unique: true })
    slug: string;
    
    @Prop()
    capital: string;
    
    @Prop()
    foundedAt: string;

    @Prop()
    area: string;

    @Prop()
    phonePrefix: string;

    @Prop()
    website: string;

    @Prop([String])
    counties: string[];
}

export const StatesSchema = SchemaFactory.createForClass(Provinces);
