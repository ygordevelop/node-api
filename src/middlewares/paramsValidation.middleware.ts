import { Request, Response, NextFunction, RequestHandler } from 'express';
import { validate, ValidationError } from 'class-validator';
import { plainToClass } from 'class-transformer';

export function paramsValidationModdleware(classType: any, skipMissingProperties: boolean = false): RequestHandler {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dtoObj = plainToClass(classType, req.body);
        try {
            const errors: ValidationError[] = await validate(dtoObj, { skipMissingProperties });
            if (errors.length > 0) {
                const result = errors.map((error: ValidationError) => {
                    return {
                        [error.property]: (Object as any).values(error.constraints)
                    };
                });

                return res.status(400).send({
                    status: 'error',
                    message: 'params invalid!',
                    data: result
                });
            }

            res.locals.dtoObj = dtoObj;
            next();
        } catch (err) {
            return res.status(500).send(err);
        }
    };
}
