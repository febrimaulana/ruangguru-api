import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';

export default class PrizeYupV1 {
    static async klaimAction(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                id: yup.string().required(),
                status: yup.mixed().oneOf(["delivery", "rejected"]).required()
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