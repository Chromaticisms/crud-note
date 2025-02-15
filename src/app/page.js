import { Card } from "@/components/card";
import { createData } from "./_components/create";
import { API } from "@/components/constants";

async function getData() {
  const res = await fetch(API);
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <div className="flex justify-center items-start">
        <div id="container" className="grid grid-cols-3 m-4 gap-4 w-2/3">
          {data.data.map((item) => {
            return (
              <Card
                key={item._id}
                title={item.name}
                description={item.content}
                id={item._id}
              />
            );
          })}
          <form
            className="h-40 grid grid-rows-4 grid-cols-1 gap-2 justify-between h-40"
            action={createData}
          >
            <input
              name="newTitle"
              type="text"
              className="px-2 py-1 border border-gray-400 outline-none rounded-lg row-span-1"
              placeholder="New title"
            ></input>
            <textarea
              name="newContent"
              id="newContent"
              type="text"
              className="resize-none px-2 py-1 border border-gray-400 outline-none rounded-lg row-span-2 scroll-smooth"
              placeholder="New content"
            ></textarea>
            <button className="bg-blue-400 border-2 border-blue-500 rounded-lg font-bold h-full row-span-1">
              Create new note
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
