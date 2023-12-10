import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // 任何模块都可以引用这个模块，可以使用CatsService
})
export class CatsModule {
    // 设置为私有 不能再提供注入
    // constructor(private catsService : CatsService) {}
}