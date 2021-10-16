import bcrypt from 'bcrypt';

const bcryptCheck = (data: string, hash: string) => {
    const replaceHash = hash.replace(/^\$2y(.+)$/i, '$2a$1');
    return bcrypt.compareSync(data, replaceHash)
}

export default bcryptCheck;