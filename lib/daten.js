import sql from "better-sqlite3";
const DB = sql("AD.db");
const path = require("path");

export function fetchAll(table) {
  return DB.prepare(`SELECT * FROM ${table}`).all();
}
export function fetchSTD(table) {
  return DB.prepare(`SELECT * FROM ${table} WHERE Type LIKE 'STD%'`).all();
}
export function fetchTD(table) {
  return DB.prepare(`SELECT * FROM ${table} WHERE Type LIKE 'TD%'`).all();
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
export async function insertverb(formData) {
  try {
    const info = DB.prepare(
      `INSERT INTO Rule (Date, Relation, Verb, EN, FA, Spell, Present1, Present2, Present3, Present4, Present5, Present6, Past1, Past2, Past3, Past4, Past5, Past6, Perfect1, Perfect2, Perfect3, Perfect4, Perfect5, Perfect6, Future1, Future2, Future3, Future4, Future5, Future6) VALUES (@Date, @Relation, @Verb, @EN, @FA, @Spell, @Present1, @Present2, @Present3, @Present4, @Present5, @Present6, @Past1, @Past2, @Past3, @Past4, @Past5, @Past6, @Perfect1, @Perfect2, @Perfect3, @Perfect4, @Perfect5, @Perfect6, @Future1, @Future2, @Future3, @Future4, @Future5, @Future6)`,
    ).run({
      Date: new Date().toISOString(),
      Relation: formData.get("Relation"),
      Verb: formData.get("Verb"),
      EN: formData.get("EN"),
      FA: formData.get("FA"),
      Spell: formData.get("Spell"),
      Present1: formData.get("Present1"),
      Present2: formData.get("Present2"),
      Present3: formData.get("Present3"),
      Present4: formData.get("Present4"),
      Present5: formData.get("Present5"),
      Present6: formData.get("Present6"),
      Past1: formData.get("Past1"),
      Past2: formData.get("Past2"),
      Past3: formData.get("Past3"),
      Past4: formData.get("Past4"),
      Past5: formData.get("Past5"),
      Past6: formData.get("Past6"),
      Perfect1: formData.get("Perfect1"),
      Perfect2: formData.get("Perfect2"),
      Perfect3: formData.get("Perfect3"),
      Perfect4: formData.get("Perfect4"),
      Perfect5: formData.get("Perfect5"),
      Perfect6: formData.get("Perfect6"),
      Future1: formData.get("Future1"),
      Future2: formData.get("Future2"),
      Future3: formData.get("Future3"),
      Future4: formData.get("Future4"),
      Future5: formData.get("Future5"),
      Future6: formData.get("Future6"),
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
