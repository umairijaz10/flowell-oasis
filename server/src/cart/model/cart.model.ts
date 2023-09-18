// Modules
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CartItem  extends Document {
    @Prop({ required: true, unique: true })
    user: string;

    @Prop({ required: true })
    product: string;

    @Prop({ required: true })
    quantity: number;
}

export class Order extends Document {
    @Prop({ required: true })
    user: string;

    @Prop({ type: [{ product: String, quantity: Number }], required: true })
    items: { product: string; quantity: number }[];

    @Prop({ required: true })
    totalPrice: number;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);
export const OrderSchema  = SchemaFactory.createForClass(Order);
