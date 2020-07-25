import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Province extends Document {
    @Prop({ required: true })
    name: string;
    
    @Prop({ required: true })
    capital: string;
    
    @Prop({ required: true })
    foundedAt: Date;

    @Prop({ required: true })
    area;

    @Prop({ required: true })
    phonePrefix: string;

    @Prop()
    website: string;

    @Prop({ required: true, type: [String] })
    counties: string[];
}

export const ProvinceSchema = SchemaFactory.createForClass(Province);
