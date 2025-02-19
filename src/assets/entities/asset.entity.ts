import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import crypto from "crypto";
import { HydratedDocument } from "mongoose";

export type AssetDocument = HydratedDocument<Asset>;

@Schema({ timestamps: true })
export class Asset {
    @Prop({ default: () => crypto.randomUUID()})
    _id: string;
    
    @Prop()
    name: string;
    
    @Prop()
    symbol: string;
    
    @Prop()
    image: string;
    
    @Prop()
    price: number;

    createdAt!: Date;
    updatedAt!: Date;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);