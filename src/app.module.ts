import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cat.module';
// 优化一下 直接引用catmodules 而不是再次注入controller和provider
// import { CatsController} from './cats/cats.controller'
// import { CatsService } from './cats/cats.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
