import Link from "next/link";

import { StaticPages } from "@/content/data";

export default function LargeMenu() {
  const menu = StaticPages.filter((m) => m.id < 9);
  return (
    <div className="flex-1">
      <h2 className="hidden lg:block lg:m-0 text-xpink text-center text-3xl xl:text-4xl">
        <Link id="Nry Koçluk ve Danışmanlık Merkezi" href="/">
          NRY Koçluk ve Danışmanlık Merkezi
        </Link>
      </h2>
      <nav className="flex-1 px-4 font-extralight text-sm md:text-base hidden lg:block">
        <ul className="hidden md:flex md:justify-center md:space-x-2 font-semibold">
          {menu.map((p) => (
            <li
              key={p.id}
              className={`text-base text-xpurple p-2 hover:gradientPurpleToPink rounded-xl`}
            >
              <Link href={`/${p.link}`}>{p.title.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
