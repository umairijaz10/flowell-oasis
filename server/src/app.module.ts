// Modules
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// App Modules
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/flowelloasis'),
    ProductModule,
    AuthModule,
    UsersModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
