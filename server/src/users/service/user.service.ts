// Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Models
import { User } from '../model/user.model';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }

    async findOne(query: any): Promise<User | null> {
        return this.userModel.findOne(query).exec();
    }

    async createUser(data: Partial<User>): Promise<User> {
        const newUser = new this.userModel(data);
        return newUser.save();
    }
}