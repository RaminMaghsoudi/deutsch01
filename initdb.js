const sql = require("better-sqlite3");
const db = sql("AD.db");

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS Laibrary (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       Title TEXT NOT NULL,
       EN TEXT NOT NULL,
       FA TEXT NOT NULL,
       Desc TEXT NOT NULL
    )
`,
).run();
db.close();
