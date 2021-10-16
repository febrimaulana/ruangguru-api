import { Request, Response, NextFunction } from "express";
import { bcryptCheck, HttpException } from "../../../utils";
import { resSuccess } from "../../../constant";

const { Admin } = require("../../../models")

export default class LoginV1 {
    static async loginEmailPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const body: { email: string, password: string } = req.body;

            const result = await Admin.findOne({
                where: { email: body.email }
            });

            if (!result) throw new HttpException(404, "Email belum terdaftar");
            if (!bcryptCheck(body.password, result.password)) throw new HttpException(403, "Password anda salah");

            resSuccess({ message: "Success login", data: result }, res)

        } catch (e) {
            next(e)
        }
    }
}
