import { IRouter, Router } from 'express';
import {UserController} from "../controllers";
import { paramsValidationModdleware } from "../middlewares";
import { CreateUserDto } from "../dto";

const router: IRouter = Router();

router.post('/users', paramsValidationModdleware(CreateUserDto), UserController.signUp);

export { router };

