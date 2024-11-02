"use client";
import Link from "next/link";
import { StaticPages } from "@/content/data";
import HeaderLogo from "@/components/ui/header/Logo";

import { useState } from "react"; // import state

export default function MobileMenu() {
  const menu = StaticPages.filter((m) => m.id < 16);
  const [isNavOpen, setIsNavOpen] = useState(false);
  function handleClick() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <div className="w-32 md:w-48 px-4 flex justify-end">
      <nav id="service-menu">
        <ul className="hidden xl:flex space-x-4 text-sm m-2">
          <li className="gradientAccentToDark gradientTransition text-white rounded-xl py-1 px-3">
            <a href="/blog">Blog</a>
          </li>
          <li className="rounded-xl  hover:bg-gray-300 py-1 px-3">
            <a href="/iletisim">İletişim</a>
          </li>
        </ul>

        <section className="flex xl:hidden cursor-pointer">
          <div className="space-y-2 h-8 w-8" onClick={handleClick}>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="px-4 py-1">
              <HeaderLogo />
            </div>
            <div
              className="absolute top-0 right-0 px-8 py-4 "
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 gradientRedToBlack"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="flex flex-col items-left m-16 py-8 px-12 border rounded-xl bg-gray-200 border-gray-300 shadow-lg ">
              {menu.map((pg) => (
                <li key={pg.id} className={` my-2`}>
                  <h3 className="inline-block border-b border-gray-400 font-bold">
                    <Link href={`/${pg.link}`} onClick={handleClick}>
                      {pg.title.toUpperCase()}
                    </Link>
                  </h3>

                  <ul className="flex flex-col">
                    {pg.pages.map((sp) => (
                      <li
                        key={sp.id}
                        className=" text-sm text-gray-400 hover:text-gray-800 gradientTransition"
                      >
                        <a
                          href={
                            pg.id == 4 && sp.id < 3
                              ? "/" + sp.link
                              : "/" + sp.link
                          }
                        >
                          {sp.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
}
