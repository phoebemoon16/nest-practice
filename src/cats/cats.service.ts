/**
 * 做一些更为复杂的处理工作 比如数据存储和检索
 * 可以注入依赖
 * 定义一个catsService provider
 *  */
import { Injectable } from "@nestjs/common";
import { Cat } from './interfaces/cat.interface'

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = []

    create(cat: Cat){
        this.cats.push(cat)
    }

    findAll(): Cat[] {
        return this.cats
    }
}


