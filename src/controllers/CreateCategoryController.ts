import { Response, Request } from 'express';
import { prismaClient } from '../database/prismaClient';

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const category = await prismaClient.category.create({
      data: { name },
    });
    res.json(category)
  }

  async get(req: Request, res: Response) {
    return res.json({ email: 'kambaia@gmail.com' });
  }
}
