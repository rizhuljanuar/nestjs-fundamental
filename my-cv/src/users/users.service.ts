import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // CREATE
  async create(email: string, password: string) {
    // 1. Create instance di memory
    const user = this.usersRepository.create({ email, password });

    // 2. Save ke database
    return await this.usersRepository.save(user);
  }

  // FIND ONE
  async findOne(id: number) {
    return await this.usersRepository.findOne({ where: { id } });
  }

  // FIND BY EMAIL
  async findByEmail(email: string) {
    return await this.usersRepository.find({ where: { email } });
  }

  // UPDATE
  async update(id: number, attrs: Partial<User>) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new Error('User not found');

    Object.assign(user, attrs);
    return await this.usersRepository.save(user);
  }

  // DELETE
  async remove(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new Error('User not found');

    return await this.usersRepository.remove(user);
  }
}