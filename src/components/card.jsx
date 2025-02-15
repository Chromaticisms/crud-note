import { deleteData } from "@/app/_components/delete";
import Link from "next/link";

export const Card = ({ title, description, id }) => {
  return (
    <>
      <div className="bg-blue-300 border-2 border-blue-400 rounded-lg h-40 relative">
        <Link href={`./${id}`} id="card" className=" rounded-lg">
          <div className="bg-blue-400 font-bold p-2 overflow-hidden text-ellipsis max-h-10 border-blue-400 border-b m-0">
            {title}
          </div>
        </Link>
        <div className="text-justify m-2 overflow-hidden text-ellipsis max-h-24">
          {description}
        </div>
        <div className="col-span-2 row-span-1 grid grid-rows-1 grid-cols-2 h-full gap-2">
          <form action={deleteData}>
            <input name="id" type="text" defaultValue={id} hidden />
            <button className="bg-red-100 text-red-600 font-bold text-xs rounded-md border-2 border-red-500 p-1 absolute bottom-2 right-2">
              Delete
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
