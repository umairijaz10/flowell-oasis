// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Model
import { CartItem, Order } from '../model/cart.model';
import { User } from '../../users/model/user.model';

@Injectable()
export class CartService {
    constructor(
        @InjectModel('CartItem') private readonly cartItemModel: Model<CartItem>,
        @InjectModel('Order') private readonly orderModel: Model<Order>,
        @InjectModel('User') private readonly userModel: Model<User>,
    ) {}

    async addToCart(userId: string, productId: string, quantity: number): Promise<CartItem> {
        const cartItem = new this.cartItemModel({
            user: userId,
            product: productId,
            quantity,
        });

        return await cartItem.save();
    }

    async removeFromCart(userId: string, cartItemId: string): Promise<void> {
        await this.cartItemModel.deleteOne({ _id: cartItemId, user: userId });
    }

    async getCart(userId: string): Promise<CartItem[]> {
        return await this.cartItemModel.find({ user: userId }).populate('product');
    }

    async purchaseCart(userId: string): Promise<void> {
        const cartItems = await this.cartItemModel.find({ user: userId }).exec();
        const order = new this.orderModel({
            user: userId,
            items: cartItems.map((item) => ({
                product: item.product,
                quantity: item.quantity,
            })),
            totalPrice: cartItems.reduce((total, item) => total + item.quantity, 0)
        });

        await order.save();
        await this.userModel.updateOne({ _id: userId }, { $push: { orderHistory: order._id } });
        await this.cartItemModel.deleteMany({ user: userId });
    }
}
