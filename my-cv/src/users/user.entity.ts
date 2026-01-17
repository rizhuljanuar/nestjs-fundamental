import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 0 })
  age: number;

  @Column({ default: '' })
  name: string;

  // HOOK: setelah Insert
  @AfterInsert()
  logInsert() {
    console.log(`Inserted user with ID ${this.id}`)
  }

  // HOOK: setelah update
  @AfterUpdate()
  logUpdate() {
    console.log(`Updated user with ID ${this.id}`)
  }

  // HOOK: setelah remove
  @AfterRemove()
  logRemove() {
    console.log(`Removed user with ID ${this.id}`)
  }
}