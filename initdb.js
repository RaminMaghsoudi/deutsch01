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
db.prepare(
  `
   CREATE TABLE IF NOT EXISTS Rule (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       date TEXT DEFAULT '',
       Relation TEXT DEFAULT '',
       Verb TEXT NOT NULL,
       EN TEXT DEFAULT '',
       FA TEXT DEFAULT '',
       Spell TEXT DEFAULT '',
       Present1 TEXT DEFAULT '',
       Present2 TEXT DEFAULT '',
       Present3 TEXT DEFAULT '',
       Present4 TEXT DEFAULT '',
       Present5 TEXT DEFAULT '',
       Present6 TEXT DEFAULT '',
       Past1 TEXT DEFAULT '',
       Past2 TEXT DEFAULT '',
       Past3 TEXT DEFAULT '',
       Past4 TEXT DEFAULT '',
       Past5 TEXT DEFAULT '',
       Past6 TEXT DEFAULT '',
       Perfect1 TEXT DEFAULT '',
       Perfect2 TEXT DEFAULT '',
       Perfect3 TEXT DEFAULT '',
       Perfect4 TEXT DEFAULT '',
       Perfect5 TEXT DEFAULT '',
       Perfect6 TEXT DEFAULT '',
       Future1 TEXT DEFAULT '',
       Future2 TEXT DEFAULT '',
       Future3 TEXT DEFAULT '',
       Future4 TEXT DEFAULT '',
       Future5 TEXT DEFAULT '',
       Future6 TEXT DEFAULT ''
    )
`,
).run();
db.close();
