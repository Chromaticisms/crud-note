import { API } from "@/components/constants";
import { revalidatePath } from "next/cache";

const updateData = async (formData) => {
  "use server";

  const id = formData.get("id");
  const editTitle = formData.get("editTitle");
  const editContent = formData.get("editContent");

  await fetch(API, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: id, name: editTitle, content: editContent }),
  });

  revalidatePath("/asdasd");
};

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`${API}/${id}`);
  const data = await res.json();
  return (
    <>
      <div className="m-2">
        <form
          action={updateData}
          className="flex flex-col justify-start items-center"
        >
          <input name="id" defaultValue={id} hidden></input>
          <input
            name="editTitle"
            className="rounded-lg m-2 border border-gray-400 text-4xl text-center w-2/3 outline-none"
            defaultValue={data.name}
          ></input>
          <textarea
            rows={20}
            name="editContent"
            className="rounded-lg m-2 border border-gray-400 text-lg w-2/3 text-center outline-none"
            defaultValue={data.content}
          ></textarea>
          <button className="rounded-lg bg-green-200 border border-green-500 px-4 py-1 text-2xl font-bold text-green-600 m-2">
            Save
          </button>
        </form>
      </div>
    </>
  );
}
