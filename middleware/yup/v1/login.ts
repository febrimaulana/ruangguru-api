import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { formatPhone } from '../../../utils';

export default class LoginYupV1 {
    static async checkPhone(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                phone: yup.string().required(),
            })

            const valid = await schema.validate(req.body);
            req.body = valid;
            req.body.phone = formatPhone(valid.phone);
            next()
        } catch (e: any) {
            e.code = 400;
            next(e)
        }
    }
}