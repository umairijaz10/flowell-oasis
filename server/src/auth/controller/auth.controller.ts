// Modules
import { Controller, Body, Post, Request, UseGuards, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// Model
import { User } from '../model/user.model';

// Service
import { AuthService } from '../service/auth.service';

// Dto
import { RegisterDto } from '../dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @UseGuards(AuthGuard('local'))
    async login(@Request() req) {
        return req.user;
    }

    @Post('register')
    @HttpCode(201)
    async register(@Body() registerDto: RegisterDto): Promise<User> {
        return this.authService.register(registerDto);
    }
}