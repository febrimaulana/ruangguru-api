import { Request, Response, NextFunction } from "express";
import { resSuccess } from "../../../constant";
import { bcryptEnkripsi, HttpException, jwtGenerateToken } from "../../../utils";
import { RegisterDto } from "./registerDto";

const { Admin } = require("../../../models");

export default class RegisterV1 {
    static async emailPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const body: RegisterDto = req.body;
            const result = await Admin.findOne({
                where: { email: body.email },
                attributes: { exclude: ['isActive', 'createdAt', 'updatedAt'] },
            }
            );
            if (result) throw new HttpException(403, "Email sudah terdaftar");
            body.password = bcryptEnkripsi(body.password);
            const data = await Admin.create(body);
            data.dataValues.token = await jwtGenerateToken({ id: data.id });
            resSuccess({ message: "Success register", data: data }, res)
        } catch (e) {
            next(e)
        }
    }
}