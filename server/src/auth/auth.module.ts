// Modules
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';

// Model
import { User, UserSchema } from './model/user.model';

// Controllers
import { AuthController } from './controller/auth.controller';

// Service
import { AuthService } from './service/auth.service';

// Strategy
import { LocalStrategy } from './strategy/local.strategy';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'local' }),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    providers: [AuthService, LocalStrategy],
    controllers: [AuthController],
    exports: [AuthService],
})

export class AuthModule {}
