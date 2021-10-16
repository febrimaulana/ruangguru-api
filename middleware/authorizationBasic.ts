import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../utils';

const authorizationBasic = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authToken = req.headers.authorization
        if (authToken) {
            const token: string[] = authToken.split(" ");
            const tokenBesic = process.env.TOKEN;

            if (token[0] === "Basic") {
                if (tokenBesic == token[1]) {
                    next()
                } else {
                    throw new HttpException(401, "Token Unauthorized")
                }
            } else {
                throw new HttpException(401, "Invalid Type Token")
            }
        } else {
            throw new HttpException(401, "Invalid Token")
        }
    } catch (e: any) {
        e.code = 401
        next(e)
    }
}

export default authorizationBasic;