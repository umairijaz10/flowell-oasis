// Modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

// App Modules
import { UsersModule } from '../users/users.module';

// Model
import { UserSchema } from '../users/model/user.model';

// Controllers
import { AuthController } from './controller/auth.controller';

// Constants
import { jwtConstants } from './constants/constants';

// Services
import { AuthService } from './service/auth.service';

// Strategy
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1d' },
        }),
        UsersModule,
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService],
})

export class AuthModule {}
