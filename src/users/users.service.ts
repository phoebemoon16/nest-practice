import { Injectable } from '@nestjs/common';
import { create } from 'domain';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'phoebe',
            email: '9999@123.com',
            role: 'ADMIN'
        },
        {
            id: 2,
            name: 'lenno',
            email: '888@123.com',
            role: 'ENGINEER'
        }
    ]

    // filter role form user
    findAll(role ?: 'ENGINEER' | 'ADMIN' | 'INTERN'){
        if(role) {
            return this.users.filter(user => user.role === role)
        } else {
            return this.users
        }
    }

    // find one from id 
    findOne(id: number){
       const user = this.users.find(user => user.id === id)
       return user
    }

    // type User = {
    //     name: string,
    //     email: string,
    //     role: 'ADMIN' | 'INTERN' | 'ENGINEER'
    // }

    create(user: { name: string,
        email: string,
        role: 'ADMIN' | 'INTERN' | 'ENGINEER'}) {
            // database can add id by auto
        const userByHightestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: userByHightestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }
    
    update(id: number, updatedUser:{ name?: string,
        email?: string,
        role?: 'ADMIN' | 'INTERN' | 'ENGINEER'}) {
        
        this.users = this.users.map(user => {
            if (user.id === id) {
                return {...user, ...updatedUser}
            }
            return user
        })

        return this.findOne(id)

    }

    delete(id: number) {
        const removeUser = this.findOne(id) 
        this.users = this.users.filter(user => user.id !== id)
        return removeUser
    }
}
