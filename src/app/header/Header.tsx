"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="p-6 bg-white shadow-md relative">
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
              <a href="#home" className="relative">
                Home
                <span className="block w-full h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left absolute bottom-0 left-0"></span>
              </a>
            </li>
            <li className="hover:text-teal-400">
              <a href="#overview">Overview</a>
            </li>
            <li className="hover:text-teal-400">
              <a href="#chapters">Chapters</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
