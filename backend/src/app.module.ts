import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { FilesModule } from './modules/files/files.module';
import { TagsModule } from './modules/tags/tags.module';
import { CommentsModule } from './modules/comments/comments.module';
import { ReviewAuditsModule } from './modules/review-audits/review-audits.module';
import { HttpModule } from '@nestjs/axios';
import { ChatGptModule } from './modules/chat-gpt/chat-gpt.module';

@Module({
  imports: [
    UserModule,
    ReviewsModule,
    FilesModule,
    TagsModule,
    CommentsModule,
    ReviewAuditsModule,
    HttpModule,
    ChatGptModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
