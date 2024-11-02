import Link from "next/link";

import { StaticPages } from "@/content/data";

export default function LargeMenu() {
  const menu = StaticPages.filter((m) => m.id < 6);
  return (
    <nav className="flex-1 px-4 font-extralight text-sm md:text-base hidden xl:block">
      <ul className="hidden md:flex md:justify-center md:space-x-2 ">
        {menu.map((p) => (
          <li
            key={p.id}
            className={`text-base text-gray-600 p-2 hover:gradientAccentToDark hover:text-white rounded-xl`}
          >
            <Link href={`/${p.link}`}>{p.title.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
