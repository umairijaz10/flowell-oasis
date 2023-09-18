// Modules
import { Controller, Post, Delete, Get, Param, UseGuards, Request, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

// Service
import { CartService } from '../service/cart.service';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Get()
    async getCart(@Request() req) {
        const userId = req.user.id;
        return await this.cartService.getCart(userId);
    }

    @Post(':productId')
    async addToCart(@Param('productId') productId: string, @Body() { quantity }: { quantity: number }, @Request() req) {
        const userId = req.user.id;
        return await this.cartService.addToCart(userId, productId, quantity);
    }

    @Post('purchase')
    async purchaseCart(@Request() req) {
        const userId = req.user.id;
        return await this.cartService.purchaseCart(userId);
    }

    @Delete(':cartItemId')
    async removeFromCart(@Param('cartItemId') cartItemId: string, @Request() req) {
        const userId = req.user.id;
        return await this.cartService.removeFromCart(userId, cartItemId);
    }
}
