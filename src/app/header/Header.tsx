"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-2 bg-white shadow-md w-full z-[1300] fixed">
      <div className="flex flex-row justify-between items-center px-12">
        <div className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden w-16 h-16 mr-4">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h1
            className="text-2xl font-normal text-gray-600"
          >
            Corpul Uman
          </h1>
        </div>
        <nav>
          <ul className="flex gap-8 text-xl text-gray-600 font-normal">
            <li className="hover:text-teal-400">
              <Link href="/" className="relative group cursor-pointer">
                Home
              </Link>
            </li>
            <li className="hover:text-teal-400">
              <Link href="/#overview" scroll={true} className="cursor-pointer">
                Overview
              </Link>
            </li>
            <li className="hover:text-teal-400">
              <Link href="/#chapters" scroll={true} className="cursor-pointer">
                Chapters
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
