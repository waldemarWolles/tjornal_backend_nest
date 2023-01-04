import { IsArray, IsOptional, IsString } from 'class-validator';

export interface OutputBlockData {
  id?: string;

  type: string;

  data: any;
}

export class CreatePostDto {
  @IsString()
  title: string;

  @IsArray()
  body: any;

  @IsOptional()
  @IsArray()
  tags?: string;
}
