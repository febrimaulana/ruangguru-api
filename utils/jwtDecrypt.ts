import jwt from 'jsonwebtoken';

export default function jwtDecrypt(token: any): any {
    try {
        return jwt.verify(token, String(process.env.JWTKEY));
    } catch (e: any) {
        e.code = 401;
        e.message = "Token tidak valid";
        throw e
    }
}
