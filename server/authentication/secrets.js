module.exports = {
    jwtSecret: process.env.JWT_SECRET || "Baphomet",
    hashRounds: process.env.BCRYPT_ROUNDS || 4
}