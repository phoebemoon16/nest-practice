import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

// servie's have some methods that handle the data, so we need to import ir
import { UsersService } from './users.service';

@Controller('users') // /users
export class UsersController {
    /**
     * test
     * get /users
     * get /users/:id
     * post /users
     * patch /users/:id
     * delete /users/:id
     */
    // @Get() // get /users
    // findAll(){
    //     return []
    // }
    constructor(private readonly userService:UsersService) {}

    @Get() // get /users?role=value 传递一些role参数
    findAll(@Query('role') role?: 'ADMIN' | 'INTERN' | 'ENGINEER' ){
        // return []
        // import service that we can use service's methods
        return this.userService.findAll(role)
    }


    @Get('interns') // get /users/interns 不能放在/users/:id后面 否则会被认为是id:interns 注册一些静态路由
    findAllInterns(){
        // return []
        return this.userService.findAll()
    }

    @Get(':id') //get /users/:id
    findOne(@Param('id') id: string) {
        // return { id }
        // string to number, because the id in service is number
        return this.userService.findOne(+id)
    }

    @Post()
    create(@Body() user: { name: string,
        email: string,
        role: 'ADMIN' | 'INTERN' | 'ENGINEER'}){
        // return 
        return this.userService.create(user)
    }


    @Patch(':id')
    update(@Param('id') id:string, @Body() userUpdate: { name?: string,
        email?: string,
        role?: 'ADMIN' | 'INTERN' | 'ENGINEER'}) {  // 设置body去修改值
        // return {id, ...userUpdate}
        return this.userService.update(+id, userUpdate)
    }

    @Delete(':id')
    delete(@Param('id') id:string) {  // 设置id去进行删除
        // return { id }
        return this.userService.delete(+id)
    }
}
