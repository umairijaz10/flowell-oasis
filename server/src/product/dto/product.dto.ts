import { IsString, IsNotEmpty, IsNumber, Min, IsOptional } from 'class-validator';

export class ProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    price: number;

    @IsNumber()
    @IsNotEmpty()
    @Min(0)
    quantity: number;

    @IsOptional()
    @IsString()
    imageUrl: string;
}