import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser(id: number): string {
    return `This is user ${id}`;
  }
  createUser({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) {
    const user = {
      name,
      email,
      password,
    };

    return { user, message: 'User created' };
  }
}
