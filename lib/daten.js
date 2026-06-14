import sql from "better-sqlite3";
const DB = sql("AD.db");
const path = require("path");

export function fetchAll(table) {
  return DB.prepare(`SELECT * FROM ${table}`).all();
}
export async function insert(formData) {
  try {
    const info = DB.prepare(
      `INSERT INTO Laibrary (Title, EN, FA, Desc) VALUES (@Title, @EN, @FA, @Desc)`,
    ).run({
      Title: formData.get("Title"),
      EN: formData.get("EN"),
      FA: formData.get("FA"),
      Desc: formData.get("Desc"),
    });
    if (info.changes === 1) {
      return {
        success: true,
        message: "Daten erfolgreich gespeichert.",
      };
    } else {
      return {
        success: false,
        message: "Es wurden keine Änderungen vorgenommen.",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Fehler beim Speichern der Daten",
      error: err.message,
      code: err.code,
    };
  }
}
