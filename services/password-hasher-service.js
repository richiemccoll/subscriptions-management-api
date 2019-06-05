import bcrypt from 'bcrypt';

export default class PasswordHasher {
    constructor() {
        this.rounds = 10;
    }

    async hash(password) {
        return await bcrypt.hash(password, this.rounds);
    }

    async check(password, hash) {
        return await bcrypt.compare(password, hash);
    }
}