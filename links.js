import { randomBytes } from 'node:crypto'
import db from './db.js'

const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const CODE_LENGTH = 7

const insert = db.prepare('INSERT INTO links (code, url) VALUES (?, ?)')

const selectByCode = db.prepare('SELECT url FROM links WHERE code = ?')

export function findUrlByCode(code) {
    const row = selectByCode.get(code)
    return row ? row.url : null
}

function generateCode() {
    const bytes = randomBytes(CODE_LENGTH)
    let code = ''
    for (let i = 0; i < CODE_LENGTH; i++) {
        code += ALPHABET[bytes[i] % ALPHABET.length]
    }
    return code
}

export function createLink(url) {
    for (let attempt = 0; attempt < 5; attempt++) {
        const code = generateCode()
        try {
            insert.run(code, url)
            return code
        } catch (err) {
            if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') continue
            throw err
        }
    }
    throw new Error('não foi possível gerar um código único')
}