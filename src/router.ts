import { Router } from "express";
import { CreateUseController } from "./controllers/userController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";

const router = Router();

const createUser = new CreateUseController();
const createCategory = new CreateCategoryController();
router.get('/users', createUser.findByQuery)
router.post('/user', createUser.handle);
router.post('/category', createCategory.handle);
router.post('/auth', createUser.findByEmail);
export { router };