import { CommentEntity } from 'src/comment/entities/comment.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({
    unique: true,
  })
  email: string;

  @OneToMany(() => CommentEntity, (comment) => comment.user, {
    eager: false,
    nullable: true,
  })
  comments: CommentEntity[];

  @Column({ nullable: true })
  password?: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
