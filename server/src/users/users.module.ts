// Modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

// App Modules
import { AuthModule } from '../auth/auth.module';

// Models
import { UserSchema } from './model/user.model';

// Controllers
import { UserController } from './controller/user.controller';

// Service
import { UserService } from './service/user.service';
import { AuthService } from '../auth/service/auth.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService, AuthService, JwtService],
    exports: [UserService],
})

export class UsersModule {}
