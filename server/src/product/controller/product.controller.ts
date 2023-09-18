// Modules
import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

// Model
import { Product } from '../model/product.model';

// Services
import { ProductService } from '../service/product.service';

// Dto
import { ProductDto } from '../dto/product.dto';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Body() product: ProductDto) {
        return await this.productService.create(product);
    }

    @Get()
    async findAll() {
        return await this.productService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.productService.findOne(id);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async update(@Param('id') id: string, @Body() product: ProductDto) {
        return await this.productService.update(id, product);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async remove(@Param('id') id: string) {
        return await this.productService.remove(id);
    }
}
