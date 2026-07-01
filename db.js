import Database from 'better-sqlite3'

const dbPath = process.env.DATABASE_PATH || 'links.db'
const db = new Database(dbPath)

db.pragma('journal_mode = WAL')

db.exec(`
  CREATE TABLE IF NOT EXISTS links (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    code       TEXT    NOT NULL UNIQUE,
    url        TEXT    NOT NULL,
    created_at INTEGER NOT NULL DEFAULT (unixepoch())
  )
`)

export default db