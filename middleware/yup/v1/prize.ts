import { NextFunction, Request, Response } from 'express';
import * as yup from 'yup';
import { formatPhone } from '../../../utils';

export default class PrizeYupV1 {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                userId: yup.string().required(),
                name: yup.string().required(),
                email: yup.string().email().required(),
                phone: yup.string().required(),
                phoneOther: yup.string().required(),
                address: yup.string().required(),
                noted: yup.string().optional().nullable(),
                packageName: yup.string().required(),
                packageTag: yup.mixed().oneOf(['englishacademy', 'skillacademy', 'ruangguru']).required(),
                packageSerial: yup.string().required(),
            })

            const valid = await schema.validate(req.body);
            req.body = valid
            req.body.phone = formatPhone(valid.phone);
            req.body.phoneOther = formatPhone(valid.phoneOther);
            let prize;
            if (valid.packageTag === "englishacademy") {
                prize = "Shoes"
            } else if (valid.packageTag === "skillacademy") {
                prize = "Bag"
            } else if (valid.packageTag === "ruangguru") {
                prize = "Pencils"
            }
            req.body.prize = prize
            next()
        } catch (e: any) {
            e.code = 400;
            next(e)
        }
    }
}