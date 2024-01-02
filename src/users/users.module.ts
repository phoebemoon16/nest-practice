/**
 * nest g module users 去创建user/users.module.ts模块，并自动更新app.module.ts
 * nest g controller users 去创建user/user.controller模块，自动更新users.module.ts
 * nest g service users 去创建user/user.service模块，自动更新users.module.ts
 */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
