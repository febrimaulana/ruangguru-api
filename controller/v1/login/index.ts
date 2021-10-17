import { Request, Response, NextFunction } from "express";
import { API, resSuccess } from "../../../constant"
import { HttpException, jwtGenerateToken } from "../../../utils";

export default class LoginV1 {
    static async checkPhone(req: Request, res: Response, next: NextFunction) {
        try {
            const body: { phone: string } = req.body;
            const phone = [
                {
                    userId: "anugrahaman71",
                    phone: "6281245176267",
                },
                {
                    userId: "rahelpratama413",
                    phone: "6285744176764",
                },
                {
                    userId: "aisyahrodiah354",
                    phone: "6285716296700",
                },
            ]

            const filter = phone.find(item => item.phone == body.phone);
            if (!filter) throw new HttpException(404, "Nomor HP anda belum terdaftar")
            const result = await API.get(`/rg-package-dummy?userId=${filter.userId}`);
            resSuccess({ message: "Success phone verivikasi", data: result.data }, res);
        } catch (e) {
            next(e)
        }
    }
}