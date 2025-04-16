import Link from "next/link";

const ResponseButton = ({ message }) => {
  return (
    <>
      <div className="bg-black/95 absolute w-screen h-screen top-0"> </div>
      <div className="w-full md:w-1/2 bg-gray-600 p-4 rounded-md flex-col justify-start items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-center">{message}</h2>
        <div className="flex justify-center mt-4">
          <Link href={"/cabins"}>
            <button className="bg-accent-500 text-gray-50 px-4 py-2">
              See All Cabins
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ResponseButton;
