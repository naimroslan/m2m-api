import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Observable, from } from 'rxjs';

import { TyresPostEntity } from '../models/post.entity';
import { TyresPost } from '../models/post.interface';

@Injectable()
export class TyresService {
  constructor(
    @InjectRepository(TyresPostEntity)
    private readonly tyresPostRepository: Repository<TyresPostEntity>,
  ) {}

  createPost(tyresPost: TyresPost): Observable<TyresPost> {
    return from(this.tyresPostRepository.save(tyresPost));
  }

  findAllPosts(): Observable<TyresPost[]> {
    return from(this.tyresPostRepository.find());
  }

  updatePost(id: number, tyresPost: TyresPost): Observable<UpdateResult> {
    return from(this.tyresPostRepository.update(id, tyresPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.tyresPostRepository.delete(id));
  }
}
