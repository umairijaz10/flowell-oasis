// Modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// App module
import { UsersModule } from '../users/users.module'

// Models
import { CartItemSchema, OrderSchema } from './model/cart.model';
import { UserSchema } from '../users/model/user.model';

// controllers
import { CartController } from './controller/cart.controller';

// service
import { CartService } from './service/cart.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'CartItem', schema: CartItemSchema },
            { name: 'Order', schema: OrderSchema },
            { name: 'User', schema: UserSchema }
        ]),
        UsersModule
    ],
    controllers: [CartController],
    providers: [CartService]
})

export class CartModule {}
