import { Test, TestingModule } from '@nestjs/testing';
<<<<<<<< HEAD:src/users/users.controller.spec.ts
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
========
import { MessagesController } from './messages.controller';

describe('MessagesController', () => {
  let controller: MessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
    }).compile();

    controller = module.get<MessagesController>(MessagesController);
>>>>>>>> 3c6ba035fbb0476d9116bbb7682a8464cca4481d:src/messages/messages.controller.spec.ts
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
