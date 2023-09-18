// Modules
import { Controller, Post, Body } from '@nestjs/common';

// Services
import { AuthService } from '../../auth/service/auth.service';

// Dto
import { RegisterDto } from '../dto/users.dto';

@Controller('users')
export class UserController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto);
    }
}