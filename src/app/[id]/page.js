import { API } from "@/components/constants";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`${API}/${id}`);
  const data = await res.json();
  return (
    <>
      <div className="m-2">
        <div className="flex flex-col justify-start items-center">
          <div className="rounded-lg m-2 text-4xl text-center w-2/3 outline-none">
            {data.name}
          </div>
          <div className="rounded-lg m-2 text-lg w-2/3 text-center outline-none">
            {data.content}
          </div>
          <Link
            href={`./${id}/edit`}
            className="rounded-lg bg-yellow-200 border border-yellow-500 px-4 py-1 text-2xl font-bold text-yellow-600 m-2"
          >
            Edit
          </Link>
        </div>
      </div>
    </>
  );
}
