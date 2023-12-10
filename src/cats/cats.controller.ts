import { Body, Param, Controller, Get, Post, Delete } from "@nestjs/common";
import { CreateCatDto } from './dto/create-cat.dto'
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface'


// 注意： CatsController CatsService 都要在app.moudle.ts里面去注入
@Controller('cats')
export class CatsController {

    // 返回CatsService的实例
    constructor(private catsService: CatsService) {}


    @Post('create')
    create(@Body() createCatDto: CreateCatDto) {
      return 'This action adds a new cat';
    }

    @Get() //get请求
    async findAll(): Promise<Cat[]> {
        // return 'this action return all cats'
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    // 适配路由 abcd ab_cd,abxxxcd *可代表任何字符
    @Get('ab*cd')
    finSpecial() {
        return 'This route uses a wildcard';
    }   

    @Delete(':id')
    remove(@Param('id') id: string) {
      return `This`
    }
}