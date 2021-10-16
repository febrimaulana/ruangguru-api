import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { HttpException } from '../utils';

interface TokenJwt {
    id: number
    iat: number
}

const authorization = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization

    try {
        if (authToken) {
            const token: string[] = authToken.split(" ");
            const jwtKey: string = String(process.env.JWTKEY);

            if (token[0] === 'Bearer') {
                const result = jwt.verify(token[1], jwtKey) as TokenJwt;
                req.body.userId = result.id;
                next()
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

export default authorization;