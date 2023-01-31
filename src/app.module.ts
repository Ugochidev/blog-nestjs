import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import keys from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(keys.mongoURI), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

