import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BlogsService {

  constructor(private prisma: PrismaService) {}

  async create(createBlogDto: CreateBlogDto) {
    try {

      const blog = await this.prisma.post.create({
        data: {
          title: createBlogDto.title,
          content: createBlogDto.content
        }
      })

      console.log("----------------------",blog)
      return {
        status: HttpStatus.OK,
        message: 'Blog created successfully',
        data: blog
      };
      
    } catch (error) {
      throw new HttpException('Failed', HttpStatus.BAD_REQUEST);
    }
    
  }

  async findAll() {

    try {
      
      const blogs = await this.prisma.post.findMany();
      
      return {
        status: HttpStatus.OK,
        message: 'Blog retrive successfully',
        data: blogs
      };
    } catch (error) {
      throw new HttpException('Failed', HttpStatus.BAD_REQUEST);
    }
     
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
