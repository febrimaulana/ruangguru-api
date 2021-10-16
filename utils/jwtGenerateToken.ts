import jwt from 'jsonwebtoken';

const tokenGenerate = async (json: any) => {
    const jwtKey = process.env.JWTKEY
    return jwt.sign(json, String(jwtKey))
}

export default tokenGenerate;