import bcrypt from 'bcrypt';

const bcryptCheck = (data: string, hash: string) => {
    return bcrypt.compareSync(data, hash)
}

export default bcryptCheck;