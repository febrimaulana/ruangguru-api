import bcrypt from 'bcrypt';

const bcryptEnkripsi = (data: string) => {
    const saltRounds = 10;
    return bcrypt.hashSync(data, saltRounds)
}

export default bcryptEnkripsi;