import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div>
        <h2 className="text-4xl font-bold text-white mb-5">Task List</h2>
        <Link
          className="bg-white text-sm text-blue-700 font-semibold py-2 px-6 rounded"
          href="/tasks"
        >
          Explore Task
        </Link>
      </div>
    </div>
  );
}
