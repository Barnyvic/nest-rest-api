import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
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
