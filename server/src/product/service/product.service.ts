// Modules
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// Schemas
import { Product } from '../model/product.model';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

    async create(productData: Partial<Product>): Promise<Product> {
        const createdProduct = new this.productModel(productData);
        return createdProduct.save();
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async findOne(id: string): Promise<Product | null> {
        return this.productModel.findById(id).exec();
    }

    async update(id: string, productData: Partial<Product>): Promise<Product | null> {
        return this.productModel.findByIdAndUpdate(id, productData, { new: true }).exec();
    }

    async remove(id: string): Promise<Product | null> {
        return this.productModel.findByIdAndRemove(id).exec();
    }
}
