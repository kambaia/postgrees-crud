import { Response } from "express";
import { ISearch } from "../interface/app/search";

import { IAuthor } from "../interface/AuthorInterface";

class BookModel {
  findAll({ page = 0, limit = 1, search }: ISearch){
    
  }

  findById(id: number) {
   
  }

  findByEmail(email: string) {
   
  }

  add(user: IAuthor) {
   
  }

  update(id: Number, values: any) {
    
  }

  delete(id: number) {
    
  }
}
export default new BookModel();
