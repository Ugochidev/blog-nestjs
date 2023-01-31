import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';
import { BlogController } from './blog.controller';

@Module({
  imports: [  MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }])
],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
