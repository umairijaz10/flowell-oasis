// Modules
import { Injectable, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

// Model
import { User } from '../../users/model/user.model';

// Services
import { UserService } from '../../users/service/user.service'

// Dto
import { RegisterDto } from '../../users/dto/users.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);

        if (user && bcrypt.compareSync(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async register(registerDto: RegisterDto): Promise<User> {
        const { username, email, password } = registerDto;
        const existingUser = await this.userService.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            throw new ConflictException('Username or email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await this.userService.createUser({ username, email, password: hashedPassword });

        return newUser;

    }

    async login(user: any) {
        const payload = { username: user.username, sub: user._id };

        return {
            access_token: this.jwtService.sign(payload, ),
        };
    }
}