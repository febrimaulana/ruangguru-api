import { Request, Response, NextFunction } from "express";
import { resSuccess } from "../../../constant";
import { HttpException } from "../../../utils";

const { UserPrize } = require("../../../models")

export default class PrizeV1 {
    static async klaimAction(req: Request, res: Response, next: NextFunction) {
        try {
            const body: { id: number, status: string } = req.body;
            const result = await UserPrize.findByPk(body.id);
            if (!result) throw new HttpException(404, "Data tidak ditemukan");
            await result.update({ status: body.status });
            resSuccess({ message: "Success update status" }, res)
        } catch (e) {
            next(e)
        }
    }

    static async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await UserPrize.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            });
            resSuccess({ message: "Success find all", data: result }, res);
        } catch (e) {
            next(e)
        }
    }
}