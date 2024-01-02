import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users') // /users
export class UsersController {
    /**
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

    @Get() // get /users?role=value 传递一些role参数
    findAll(@Query('role') role?: 'admin' | 'intern' ){
        return []
    }


    @Get('interns') // get /users/interns 不能放在/users/:id后面 否则会被认为是id:interns 注册一些静态路由
    findAllInterns(){
        return []
    }

    @Get(':id') //get /users/:id
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post()
    create(@Body() user: {}){
        return user
    }


    @Patch(':id')
    update(@Param('id') id:string, @Body() userUpdate: {}) {  // 设置body去修改值
        return {id, ...userUpdate}
    }

    @Delete(':id')
    delete(@Param('id') id:string) {  // 设置id去进行删除
        return { id }
    }
}
