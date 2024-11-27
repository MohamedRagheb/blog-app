import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-100 shadow-sm md:py-5 py-3 md:px-[7.5rem] px-8">
      <h2 className="font-extrabold text-2xl">Blog App</h2>
      <ul className="flex  gap-4">
        <li className="text-md font-medium">
          <Link href="#">Home</Link>
        </li>
        <li className="text-md font-medium">
          <Link href="/#blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  );
}
