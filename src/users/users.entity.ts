import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';
// import { Exclude } from 'class-transformer';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  // used to intercept outgoing response
  // @Exclude()
  password: string;

  @AfterInsert()
  logUserId() {
    console.log(`user create ${this.id}`);
  }

  @AfterRemove()
  removeUser() {
    console.log(`user remove ${this.id}`);
  }

  @AfterUpdate()
  updateUser() {
    console.log(`user update ${this.id}`);
  }
}
