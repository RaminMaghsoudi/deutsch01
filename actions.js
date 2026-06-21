"use server";

import { fetchAll, insert } from "./lib/daten";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function isInvalidText(text) {
  return !text || text.trim() === "";
}
export async function FetchAll(table) {
  return fetchAll(table);
}
export async function Insert(preveState, formData) {
  if (isInvalidText(formData.get("Title")))
    return { success: false, message: "Ungültig Title !!!" };
  if (formData.get("Type") !== null && isInvalidText(formData.get("Target")))
    return { success: false, message: "Ungültig Beschreibung !!!" };
  if (formData.get("Type") !== null && isInvalidText(formData.get("EN")))
    return { success: false, message: "Ungültig EN !!!" };
  if (formData.get("Type") !== null && isInvalidText(formData.get("FA")))
    return { success: false, message: "Ungültig FA !!!" };

  const result = await insert(formData);
  if (!result.success) {
    return {
      success: false,
      message: result.message,
    };
  }
  revalidatePath(`/`);
  if (result.success) {
    return {
      success: true,
      message: result.message,
    };
  }
  // redirect(`/login`);
}
