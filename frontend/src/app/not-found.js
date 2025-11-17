import { FaCoffee } from "react-icons/fa";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#F7EED3] text-center px-4">
      <div className="text-[5rem] mb-4">
        <FaCoffee className="text-[#A67B5B]" />
      </div>

      <h1 className="text-5xl font-bold text-[#6F4E37] mb-2">
        404
      </h1>

      <p className="text-lg text-[#A67B5B] mb-6">
        Oops… looks like this page got lost. No Worries !!!
      </p>

      <a
        href="/"
        className="px-6 py-3 rounded-full text-white bg-[#6F4E37] hover:bg-[#5A3F2E] transition-all shadow-md"
      >
        Go Back Home
      </a>
    </div>
  );
}
