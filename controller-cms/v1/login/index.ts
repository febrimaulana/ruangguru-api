import { Request, Response, NextFunction } from "express";
import { bcryptCheck, HttpException, jwtGenerateToken } from "../../../utils";
import { resSuccess } from "../../../constant";

const { Admin } = require("../../../models")

export default class LoginV1 {
    static async loginEmailPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const body: { email: string, password: string } = req.body;
            const result = await Admin.findOne({
                where: { email: body.email },
                attributes: { exclude: ['createdAt', 'updatedAt'] },
            });
            if (!result) throw new HttpException(404, "Email atau Password anda salah");
            if (!bcryptCheck(body.password, result.password)) throw new HttpException(403, "Email atau Password anda salah");
            if (!result.isActive) throw new HttpException(403, "Akun anda tidak aktif");
            result.dataValues.token = await jwtGenerateToken({ id: result.id });
            delete result.dataValues.password;
            delete result.dataValues.isActive;
            resSuccess({ message: "Success login", data: result }, res)
        } catch (e) {
            next(e)
        }
    }
}
