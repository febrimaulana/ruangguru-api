import { Request, Response, NextFunction } from "express";
import { resSuccess } from "../../../constant";
import { HttpException } from "../../../utils";
import { PrizeDto } from "./prizeDto"

const { UserPrize } = require("../../../models")

export default class PrizeV1 {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body: PrizeDto = req.body;
            const result = await UserPrize.findOne({ where: { packageSerial: body.packageSerial } });
            if (result) throw new HttpException(403, "Anda sudah request pengambilan hadiah");
            await UserPrize.create(body);
            resSuccess({ message: "Success kalim hadiah" }, res)
        } catch (e) {
            next(e)
        }
    }

    static async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.query;
            const result = await UserPrize.findOne({
                where: { userId: userId },
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            });

            resSuccess({ message: "Success find all klaim", data: result }, res);
        } catch (e) {
            next(e)
        }
    }
}