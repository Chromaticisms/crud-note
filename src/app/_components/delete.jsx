import { revalidatePath } from "next/cache";
import { API } from "@/components/constants";

export const deleteData = async (formData) => {
  "use server";

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
