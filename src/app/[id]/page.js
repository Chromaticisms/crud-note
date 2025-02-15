export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/TSzlyseyFjVt/${id}`
  );
  const data = await res.json();
  console.log({ id });
  return (
    <>
      <div className="flex justify-center items-center text-3xl font-bold border border-gray-400 m-0 p-10">
        {data.name}
      </div>
      <div className="flex justify-center items-center text-xl m-6">
        {data.content}
      </div>
    </>
  );
}
