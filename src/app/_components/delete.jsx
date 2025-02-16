"use server";

import { revalidatePath } from "next/cache";
import { API } from "@/components/constants";

export const deleteData = async (formData) => {
  const id = formData.get("id");

  await fetch(API, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([id]),
  });

  revalidatePath("/");
};
