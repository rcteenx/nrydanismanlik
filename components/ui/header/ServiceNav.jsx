"use client";
import Link from "next/link";
import { StaticPages } from "@/content/data";
import IconComponent from "@/components/ui/icons/icons";
import HeaderLogo from "@/components/ui/header/Logo";

import { useState } from "react"; // import state

export default function MobileMenu() {
  const menu = StaticPages.filter((m) => m.id < 16);
  const [isNavOpen, setIsNavOpen] = useState(false);
  function handleClick() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <div className="w-12 lg:w-24 xl:w-32  px-4 flex justify-end">
      <nav id="service-menu">
        <ul className="hidden lg:flex gap-2 text-sm m-1">
          <li className="gradientPinkToPurple hover:gradientPurpleToPink gradientTransition text-white  rounded-xl py-2 px-2 text-sm">
            <a href="tel:+905074873424">
              <IconComponent name="whatsapp" size={18} color="white" />
            </a>
          </li>
          <li className="rounded-xl gradientPurpleToPink hover:gradientPinkToPurple py-1 px-3">
            <a href="/iletisim">İletişim</a>
          </li>
        </ul>
        <div className="flex lg:hidden cursor-pointer ">
          <div className="space-y-2 h-8 w-8" onClick={handleClick}>
            <span className="block h-0.5 w-8 animate-pulse bg-violet-400"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-violet-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-violet-800"></span>
          </div>

          <div
            className={`fixed   ${isNavOpen ? "showMenuNav" : "hideMenuNav"} `}
          >
            <div className="px-4 py-2">
              <HeaderLogo />
            </div>
            <div
              className="absolute top-0 right-0 px-4 py-2"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-12 w-12 bg-violet-200 rounded-md"
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

            <ul className="flex flex-col items-left mx-4 my-2 p-4 md:p-8 border rounded-xl bg-violet-200 border-violet-300 shadow-lg text-purple-600">
              {menu.map((pg) => (
                <li key={pg.id} className={` my-1`}>
                  <h4 className="inline-block border-b border-violet-400 font-bold">
                    <Link href={`/${pg.link}`} onClick={handleClick}>
                      {pg.title.toUpperCase()}
                    </Link>
                  </h4>

                  <ul className="flex flex-col">
                    {pg.pages.map((sp) => (
                      <li
                        key={sp.id}
                        className="my-0 text-sm font-light text-violet-400 hover:text-violet-800"
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
        </div>
      </nav>
    </div>
  );
}
