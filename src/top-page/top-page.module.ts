import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [TopPageController],
      imports: [ConfigModule],
})
export class TopPageModule {}
