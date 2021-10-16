import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export default class LoginYupV1 {
    static async emailPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                email: yup.string().required(),
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