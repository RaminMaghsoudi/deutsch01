import sql from "better-sqlite3";
const DB = sql("AD.db");
const path = require("path");

export function fetchAll(table) {
  return DB.prepare(`SELECT * FROM ${table}`).all();
}
export function fetchSTD(table) {
  return DB.prepare(`SELECT * FROM ${table} WHERE Type LIKE 'STD%'`).all();
}
export async function insert(formData) {
  try {
    const info = DB.prepare(
      `INSERT INTO Laibrary (Date, Title, EN, FA, Type, Target) VALUES (@Date, @Title, @EN, @FA, @Type, @Target)`,
    ).run({
      Date: new Date().toISOString(),
      Title: formData.get("Title"),
      EN: formData.get("EN"),
      FA: formData.get("FA"),
      Type: formData.get("Type"),
      Target: formData.get("Target"),
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
export async function update(formData) {
  try {
    const info = DB.prepare(
      `
      UPDATE Laibrary
      SET
        Title = @Title,
        EN = @EN,
        FA = @FA
      WHERE Title = @OldTitle
    `,
    ).run({
      OldTitle: formData.get("OldTitle"),
      Title: formData.get("Title"),
      EN: formData.get("EN"),
      FA: formData.get("FA"),
    });

    if (info.changes > 0) {
      return {
        success: true,
        message: "Der Datensatz wurde aktualisiert",
      };
    }
    return {
      success: false,
      message: "Es wurden keine Einträge mit diesem Titel gefunden.",
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Fehler beim Aktualisieren der Daten",
      error: err.message,
      code: err.code,
    };
  }
}
export async function updatetarget(formData) {
  try {
    const info = DB.prepare(
      `
      UPDATE Laibrary
      SET
        Target = @Target
      WHERE id = @id
    `,
    ).run({
      Target: formData.get("Target"),
      id: formData.get("id"),
    });
    if (info.changes > 0) {
      return {
        success: true,
        message: "Der Datensatz wurde aktualisiert",
      };
    }
    return {
      success: false,
      message: "Es wurden keine Einträge mit diesem Titel gefunden.",
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Fehler beim Aktualisieren der Daten",
      error: err.message,
      code: err.code,
    };
  }
}
export async function deletes(title) {
  try {
    const stmt = DB.prepare(`
      DELETE FROM Laibrary
      WHERE Title = ?
    `);
    const info = stmt.run(title);
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
export async function deletestarget(id) {
  try {
    const stmt = DB.prepare(`
      DELETE FROM Laibrary
      WHERE id = ?
    `);
    const info = stmt.run(id);
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
