const sql = require("better-sqlite3");
const db = sql("AD.db");

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS Laibrary (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       date TEXT DEFAULT '',
       Title TEXT NOT NULL,
       EN TEXT DEFAULT '',
       FA TEXT DEFAULT '',
       Type TEXT DEFAULT '',
       Target TEXT DEFAULT ''
    )
`,
).run();
db.close();
