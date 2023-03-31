import { Router } from "express";
import sessionController from "../controllers/session.controller";

 export  const routerSession = Router();
 routerSession.post("/api/me", sessionController.AuthHandler);
  

