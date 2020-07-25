import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Province extends Document {
    @Prop()
    name: string;
    
    @Prop()
    capital: string;
    
    @Prop()
    foundedAt: Date;

    @Prop()
    area;

    @Prop()
    phonePrefix: string;

    @Prop()
    website: string;

    @Prop([String])
    counties: string[];
}

export const ProvinceSchema = SchemaFactory.createForClass(Province);
