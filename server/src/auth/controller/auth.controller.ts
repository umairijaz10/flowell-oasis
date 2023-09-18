// Modules
import { Controller, Body, Post, HttpCode, UnauthorizedException } from '@nestjs/common';

// Model
import { User } from '../../users/model/user.model';

// Service
import { AuthService } from '../service/auth.service';

// Dto
import { RegisterDto, LoginDto } from '../../users/dto/users.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @HttpCode(200)
    async login(@Body() loginDto: LoginDto): Promise<{ access_token: string }> {
        const user = await this.authService.validateUser(loginDto.email, loginDto.password);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const token = await this.authService.login(user);

        return token;
    }

    @Post('register')
    @HttpCode(201)
    async register(@Body() registerDto: RegisterDto): Promise<User> {
        return this.authService.register(registerDto);
    }
}