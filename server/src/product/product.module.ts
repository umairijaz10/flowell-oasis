// Modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Model
import { Product, ProductSchema } from './model/product.model';

// Controllers
import { ProductController } from './controller/product.controller';

// Services
import { ProductService } from './service/product.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ],
    controllers: [ProductController],
    providers: [ProductService],
})

export class ProductModule {}
