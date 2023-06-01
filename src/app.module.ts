import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TyresModule } from './tyres/tyres.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // forRoot: may return dynamic module asynchronously
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true, // dont use in production, you might lose your data
    })
    ,TyresModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
