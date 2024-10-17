import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private readonly users: string[] = [];

  create(users: string) {
    this.users.push();
  }

  findAll(): string[] {
    return this.users;
  }
}
