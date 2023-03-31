import { prismaClient } from '../database/prismaClient';
import { IUserRegister } from '../interface/User';
import { Isearch } from '../interface/app/search';

export async function findByQuery({ search, limit, page }: Isearch) {
  const [users, total] = await prismaClient.$transaction([
    prismaClient.user.findMany({
      include: {
        socialMedia: true,
        FavoriteBook: {
          include: { Books: true, users: true },
        },
      },
      take: limit,
      skip: page,

      where: {
        email: {
          contains: String(search),
        },
      },
    }),
    prismaClient.user.count(),
  ]);

  const tolatPage = Math.ceil(total / limit);

  return { tolatPage, total, users };
}

export async function findOne(name: string) {
  const user = await prismaClient.user.findFirst({
    where: {
      fullName: name
    },
  });

  return user;
}
export async function findByEmail(email: string) {
  const user = await prismaClient.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
}

export async function save(userData: IUserRegister) {
  const user = await prismaClient.user
    .create({
      data: {
        ...userData,
      },
    })
    .catch((err: Error) => console.log(err));
  return user;
}

export async function update(id:number, userData: IUserRegister) {
  const user = await prismaClient.user
    .update({
      where:{
        id : id
      }
      data: {
        ...userData
      },
    })
    .catch((err: Error) => console.log(err));
  return user;
}

export async function deleteUser(id:number) {
  const user = await prismaClient.user.delete({
      where:{
        id : id
      }
    })
    .catch((err: Error) => console.log(err));
  return user;
}

