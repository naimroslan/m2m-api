import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Observable } from 'rxjs';

import { TyresService } from '../services/tyres.service';
import { TyresPost } from '../models/post.interface';

@Controller('tyres')
export class TyresController {
  constructor(private tyresService: TyresService) {}

  @Post()
  create(@Body() tyresPost: TyresPost): Observable<TyresPost> {
    return this.tyresService.createPost(tyresPost)
  }

  @Get()
  findAll(): Observable<TyresPost[]> {
    return this.tyresService.findAllPosts();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() tyresPost: TyresPost
  ): Observable<UpdateResult> {
    return this.tyresService.updatePost(id, tyresPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.tyresService.deletePost(id);
  }
}
