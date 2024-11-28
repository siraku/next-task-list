import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div>
        <Link
          className="bg-white text-3xl text-blue-700 font-semibold py-2 px-6 rounded"
          href="/tasks"
        >
          Go To Your Task List
        </Link>
      </div>
    </div>
  );
}
