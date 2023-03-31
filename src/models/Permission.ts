
import { ISearch } from "../interface/app/search";
import { IUser } from "../interface/UserInterface";

class PermissionsModel {
  findAll({ page = 0, limit = 1 }: ISearch){
    
  }

  findById(id: number) {
   
  }

  findByEmail(email: string) {
    
  }

  add(user: IUser) {
    
  }

  update(id: Number, values: any) {
    
  }

  delete(id: number) {
    
  }
}
export default new PermissionsModel();
