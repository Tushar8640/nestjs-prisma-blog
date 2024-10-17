import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    findAll() {
        return 'This action returns all users';
    }

    @Get("id")
    findOne() {
        return 'This action returns a single user';
    }
}
