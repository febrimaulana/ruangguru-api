import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export default class RegisterYupV1 {
    static async emailPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                name: yup.string().required(),
                email: yup.string().email().required(),
                password: yup.string().required()
            })

            const valid = await schema.validate(req.body);
            req.body = valid
            next()
        } catch (e: any) {
            e.code = 400;
            next(e)
        }
    }
}