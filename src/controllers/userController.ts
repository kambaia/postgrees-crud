import { Response, Request } from 'express';
import { prismaClient } from '../database/prismaClient';
import { yupCreateUserInput } from '../src/yup/users';
import { findOne, save } from '../repository/service.user';

export class CreateUseController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const category = await prismaClient.category.create({
      data: { name },
    });
    res.json(category);
  }

  async handleFindOne(req: Request, res: Response) {
    findOne(req.params.name);
  }
  async handleFindAll(req: Request, res: Response) {
    findOne(req.params.name);
  }
  async handleCreate(req: Request, res: Response) {
    save(req.b);
  }
  async handleGet(req: Request, res: Response) {
    findOne(req.params.name);
  }
}
