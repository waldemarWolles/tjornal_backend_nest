import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private repository: Repository<CommentEntity>,
  ) {}

  create(dto: CreateCommentDto, userId: number) {
    return this.repository.save({
      text: dto.text,
      post: { id: dto.postId },
      user: { id: userId },
    });
  }

  async findAll() {
    const arr = await this.repository
      .createQueryBuilder('c')
      .leftJoinAndSelect('c.user', 'user')
      .getMany();

    return arr.map((obj) => {
      return {
        ...obj,
        user: obj.user,
      };
    });
  }

  async findOne(id: number) {
    const find = await this.repository.findOneBy({ id });

    if (!find) {
      throw new NotFoundException('Comment was not found');
    }
    return find;
  }

  async update(id: number, dto: UpdateCommentDto) {
    const find = await this.repository.findOneBy({ id });

    if (!find) {
      throw new NotFoundException('Comment was not found');
    }

    return this.repository.update(id, dto);
  }

  async remove(id: number) {
    const find = await this.repository.findOneBy({ id });

    if (!find) {
      throw new NotFoundException('Comment was not found');
    }

    return this.repository.delete(id);
  }
}
