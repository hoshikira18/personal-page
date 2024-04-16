"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, About, Articles, Mail } from "../icons";
import { Facebook, Insta, LinkedIn, X } from "../icons";
const Navigation = () => {
  const [page, setPage] = useState("home");

  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 z-[200] flex w-full justify-between transition-all duration-300 md:sticky md:top-0 md:h-screen md:min-h-screen md:w-16 md:py-20">
      <div className="flex h-full w-full flex-col justify-between bg-gradient-to-r from-[#18181b] to-[#222225]">
        <div className="sticky left-0 top-8 flex w-screen justify-center bg-[#222225] md:w-auto md:flex-col">
          <a
            href="/"
            onClick={() => {
              setPage("home");
            }}
            className={`${pathname == "/" ? "bg-gradient-to-tr from-primary to-secondary" : "hover:bg-green-900"} group flex w-1/4 flex-col items-center overflow-hidden transition-all md:w-auto`}
          >
            <div
              className={`${pathname == "/" ? "" : "invisible absolute right-full z-50 flex h-16 translate-x-8 items-center justify-center bg-green-600 px-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:-translate-x-1 group-hover:opacity-100"}`}
            >
              <span
                className={`${pathname == "/" ? "hidden" : "hidden text-base text-gray-300 group-hover:block"}`}
              >
                Home
              </span>
            </div>
            <Home
              color={`${pathname === "/" ? "#000" : "#ccc"}`}
              className={`h-12 w-full p-2 text-transparent md:h-16 md:p-4`}
            />
            <span
              className={`${pathname == "/" ? "text-black" : "text-gray-300"} -translate-y-2 text-sm md:hidden`}
            >
              Home
            </span>
          </a>

          <a
            href="/about"
            onClick={() => {
              setPage("about");
            }}
            className={`${pathname == "/about" ? "bg-gradient-to-tr from-primary to-secondary" : "hover:bg-green-900"} group flex w-1/4 flex-col items-center overflow-hidden transition-all md:w-auto`}
          >
            <div
              className={`${pathname == "/about" ? "" : "invisible absolute right-full z-50 flex h-16 translate-x-8 items-center justify-center bg-green-600 px-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:-translate-x-1 group-hover:opacity-100"}`}
            >
              <span
                className={`${pathname == "/about" ? "hidden" : "hidden text-base text-gray-300 group-hover:block"}`}
              >
                About
              </span>
            </div>
            <About
              color={`${pathname === "/about" ? "#000" : "#ccc"}`}
              className={`h-12 w-full p-2 md:h-16 md:p-3.5`}
            />
            <span
              className={`${pathname == "/about" ? "text-black" : "text-gray-300"} -translate-y-2 text-sm md:hidden`}
            >
              About
            </span>
          </a>
          <a
            href="/articles"
            onClick={() => {
              setPage("articles");
            }}
            className={`${pathname == "/articles" ? "bg-gradient-to-tr from-primary to-secondary" : "hover:bg-green-900"} group flex w-1/4 flex-col items-center overflow-hidden transition-all md:w-auto`}
          >
            <div
              className={`${pathname == "/articles" ? "" : "invisible absolute right-full z-50 flex h-16 translate-x-8 items-center justify-center bg-green-600 px-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:-translate-x-1 group-hover:opacity-100"}`}
            >
              <span
                className={`${pathname == "/articles" ? "hidden" : "hidden text-base text-gray-300 group-hover:block"}`}
              >
                Articles
              </span>
            </div>
            <Articles
              color={`${pathname === "/articles" ? "#000" : "#ccc"}`}
              className={`h-12 w-full p-2 md:h-16 md:p-4`}
            />
            <span
              className={`${pathname == "/articles" ? "text-black" : "text-gray-300"} -translate-y-2 text-sm md:hidden`}
            >
              Articles
            </span>
          </a>
          <a
            href="/contact"
            onClick={() => {
              setPage("contact");
            }}
            className={`${pathname == "/contact" ? "bg-gradient-to-tr from-primary to-secondary" : "hover:bg-green-900"} group flex w-1/4 flex-col items-center overflow-hidden transition-all md:w-auto`}
          >
            <div
              className={`${pathname == "/contact" ? "" : "invisible absolute right-full z-50 flex h-16 translate-x-8 items-center justify-center bg-green-600 px-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:-translate-x-1 group-hover:opacity-100"}`}
            >
              <span
                className={`${pathname == "/contact" ? "hidden" : "hidden text-base text-gray-300 group-hover:block"}`}
              >
                Contact
              </span>
            </div>
            <Mail
              color={`${pathname === "/contact" ? "#000" : "#ccc"}`}
              className={`h-12 w-full p-2 text-gray-300 md:h-16 md:p-5`}
            />
            <span
              className={`${pathname == "/contact" ? "text-black" : "text-gray-300"} -translate-y-2 text-sm md:hidden`}
            >
              Contact
            </span>
          </a>
        </div>

        <div className="sticky left-0 top-8 hidden flex-col md:flex ">
          <a
            href="https://www.facebook.com/hoshikira18"
            target="_blank"
            className=""
          >
            <Facebook className="h-12 w-full p-3 transition-all hover:text-primary dark:text-gray-500" />
          </a>
          <a
            href="https://twitter.com/khuyen_van24041"
            target="_blank"
            className=""
          >
            <X className="h-12 w-full p-3 transition-all hover:text-primary dark:text-gray-500" />
          </a>
          <a
            href="https://www.instagram.com/hoshikira18/"
            target="_blank"
            className=""
          >
            <Insta className="h-12 w-full p-3 transition-all hover:text-primary dark:text-gray-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/hoshikira"
            target="_blank"
            className=""
          >
            <LinkedIn className="h-12 w-full p-3 transition-all hover:text-primary dark:text-gray-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
