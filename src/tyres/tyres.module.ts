import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TyresService } from './services/tyres.service';
import { TyresController } from './controllers/tyres.controller';
import { TyresPostEntity } from './models/post.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([TyresPostEntity])],
  providers: [TyresService],
  controllers: [TyresController]
})
export class TyresModule {}
