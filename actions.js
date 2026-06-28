"use server";

import {
  deletes,
  deletestarget,
  fetchAll,
  fetchSTD,
  fetchTD,
  insert,
  update,
  updatetarget,
} from "./lib/daten";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}
export async function FetchAll(table) {
  return fetchAll(table);
}
export async function FetchSTD(table) {
  return fetchSTD(table);
}
export async function FetchTD(table) {
  return fetchTD(table);
}
export async function Insert(preveState, formData) {
  if (isInvalidText(formData.get("Title")))
    return { success: false, message: "Ungültig Title !!!" };

  if (
    (formData.get("Type") !== null && formData.get("Type")) === "DESCRIPTION" &&
    isInvalidText(formData.get("Target"))
  )
    return { success: false, message: "Ungültig beschreibung !!!" };
  if (
    formData.get("Type") !== null &&
    formData.get("Type") === "RULE" &&
    isInvalidText(formData.get("Target"))
  )
    return { success: false, message: "Ungültig regel !!!" };
  if (
    formData.get("Type") !== null &&
    formData.get("Type") === "RULE" &&
    isInvalidText(formData.get("Target"))
  )
    return { success: false, message: "Ungültig regel !!!" };
  if (
    formData.get("Type") !== null &&
    formData.get("Type") === "TIP" &&
    isInvalidText(formData.get("Target"))
  )
    return { success: false, message: "Ungültig tipp !!!" };
  if (
    formData.get("Type") !== null &&
    formData.get("Type") === "TABLE" &&
    isInvalidText(formData.get("Target"))
  )
    return { success: false, message: "Ungültig table !!!" };
  if (
    formData.get("Type") !== null &&
    formData.get("Type").startsWith("TD") &&
    isInvalidText(formData.get("Target"))
  )
    return { success: false, message: "Ungültig TD !!!" };
  if (
    formData.get("Type") !== null &&
    formData.get("Type").startsWith("STD") &&
    isInvalidText(formData.get("Target"))
  )
    return { success: false, message: "Ungültig STD !!!" };

  const result = await insert(formData);
  if (!result.success) {
    return {
      success: false,
      message: result.message,
    };
  } else if (result.success) {
    revalidatePath(`/`);
    return {
      success: true,
      message: result.message,
      timestamp: Date.now(),
    };
  }
}
export async function Update(preveState, formData) {
  if (isInvalidText(formData.get("Title")))
    return { success: false, message: "Ungültig Title !!!" };
  if (formData.get("Type") !== null && isInvalidText(formData.get("Target")))
    return { success: false, message: "Ungültig Beschreibung !!!" };
  if (formData.get("Type") !== null && isInvalidText(formData.get("OldTitle")))
    return { success: false, message: "Ungültig OldTitle !!!" };
  const result = await update(formData);
  if (!result.success) {
    return {
      success: false,
      message: result.message,
    };
  } else if (result.success) {
    revalidatePath(`/`);
    return {
      success: true,
      message: result.message,
      timestamp: Date.now(),
    };
  }
}
export async function UpdateTarget(preveState, formData) {
  if (formData.get("Type") !== null && isInvalidText(formData.get("Target")))
    return { success: false, message: "Ungültig Beschreibung !!!" };
  if (formData.get("Type") !== null && isInvalidText(formData.get("id")))
    return { success: false, message: "Ungültig ID !!!" };

  const result = await updatetarget(formData);
  if (!result.success) {
    return {
      success: false,
      message: result.message,
    };
  } else if (result.success) {
    revalidatePath(`/`);
    return {
      success: true,
      message: result.message,
      timestamp: Date.now(),
    };
  }
}
export async function Delete(title) {
  const result = await deletes(title);
  if (!result.success) {
    return {
      success: false,
      message: result.message,
    };
  } else if (result.success) {
    revalidatePath(`/`);
    return {
      success: true,
      message: result.message,
      timestamp: Date.now(),
    };
  }
}
export async function DeleteTarget(id) {
  const result = await deletestarget(id);
  if (!result.success) {
    return {
      success: false,
      message: result.message,
    };
  } else if (result.success) {
    revalidatePath(`/`);
    return {
      success: true,
      message: result.message,
      timestamp: Date.now(),
    };
  }
}
export async function Save(prevState, formData) {
  const mode = formData.get("mode");
  switch (mode) {
    case "insert":
      return Insert(prevState, formData);
    case "update":
      return Update(prevState, formData);
    case "updateTarget":
      return UpdateTarget(prevState, formData);
    default:
      return {
        success: false,
        message: "Der Modus ist ungültig.",
        timestamp: Date.now(),
      };
  }
}
