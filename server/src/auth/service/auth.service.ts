// Modules
import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PassportLocalModel } from 'passport-local';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

// Model
import { User } from '../model/user.model';

// Dto
import { RegisterDto } from '../dto/register.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

    async validateUser(username: string, password: string): Promise<User | null> {
        const user = await this.userModel.findOne({ username });

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return user.toObject();

        //return result;
    }

    async register(registerDto: RegisterDto): Promise<User> {
        const { username, email, password } = registerDto;
        const existingUser = await this.userModel.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            throw new ConflictException('Username or email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new this.userModel({ username, email, password: hashedPassword });

        return newUser.save();

    }
}