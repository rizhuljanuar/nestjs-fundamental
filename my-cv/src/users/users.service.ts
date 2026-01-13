import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  // CREATE
  async create(email: string, password: string) {
    // 1. Create instance di memory
    const user = this.repo.create({ email, password });

    // 2. Save ke database
    return await this.repo.save(user);
  }

  // FIND ONE
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  // FIND BY EMAIL
  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  findAll() {
    return this.repo.find();
  }

  // UPDATE
  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) throw new Error('User not found');

    Object.assign(user, attrs);
    return await this.repo.save(user);
  }

  // DELETE
  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) throw new Error('User not found');

    return await this.repo.remove(user);
  }
}