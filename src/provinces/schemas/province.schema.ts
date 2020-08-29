import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Province extends Document {
    @Prop({ unique: true })
    name: string;
    
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

export const ProvinceSchema = SchemaFactory.createForClass(Province);
