import database from "better-sqlite3";
const db = new database("database.db");

const query = db.prepare("SELECT * FROM users WHERE name = ? AND age = ?");
const user = query.get("Bob", 25);

