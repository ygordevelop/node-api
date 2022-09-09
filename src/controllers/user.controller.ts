import { Request, Response } from 'express';
import { CreateUserDto } from "../dto";

class UserController {
    signUp(req: Request, res: Response) {
        const createUserDto: CreateUserDto = res.locals.dtoObj;
        console.log(createUserDto.username, 'DTO');

        res.send(true);
    }
}

const userController = new UserController();

export { userController }
