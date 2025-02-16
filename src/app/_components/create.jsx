"use server";

import { revalidatePath } from "next/cache";
import { API } from "@/components/constants";

export const createData = async (formData) => {
  const newTitle = formData.get("newTitle");
  const newContent = formData.get("newContent");

  await fetch(API, {
    method: "POST",
    body: JSON.stringify([{ name: newTitle, content: newContent }]),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidatePath("/");
};
