'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {

    const [page, setPage] = useState("home");

    const pathname = usePathname();

    return (
        <div className="z-50 md:sticky fixed w-full md:top-0 bottom-0 flex justify-between md:h-screen md:min-h-screen md:w-16 md:py-20">

            <div className="flex flex-col w-full justify-between h-full bg-gradient-to-r from-[#18181b] to-[#222225]">
                <div className="sticky top-8 left-0 bg-[#222225] flex md:flex-col justify-center w-screen md:w-auto">
                    <Link href="/" onClick={() => { setPage("home") }} className={`${pathname == "/" ? "bg-gradient-to-tr from-primary to-secondary" : "hover:bg-green-900"} w-1/4 md:w-auto transition-all flex flex-col items-center group overflow-hidden`} >
                        <div className={`${pathname == "/" ? "" : "absolute z-50 right-full px-5 h-16 bg-green-600 invisible opacity-0 transition-all duration-200 translate-x-8 group-hover:-translate-x-1 group-hover:visible group-hover:opacity-100 flex items-center justify-center"}`}><span className={`${pathname == "/" ? "hidden" : "hidden group-hover:block text-gray-300 text-base"}`}>Home</span></div>

                        <svg className="w-full md:h-16 h-12 md:p-4 p-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke={`${pathname === "/" ? "#000" : "#ccc"}`} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                        </svg>
                        <span className={`${pathname == "/" ? "text-black" : "text-gray-300"} text-sm -translate-y-2 md:hidden`}>Home</span>
                    </Link>

                    <Link href="/about" onClick={() => { setPage("about") }} className={`${pathname == "/about" ? "bg-gradient-to-tr from-primary to-secondary" : "hover:bg-green-900"} w-1/4 md:w-auto transition-all flex flex-col items-center group overflow-hidden`}>
                        <div className={`${pathname == "/about" ? "" : "absolute z-50 right-full px-5 h-16 bg-green-600 invisible opacity-0 transition-all duration-200 translate-x-8 group-hover:-translate-x-1 group-hover:visible group-hover:opacity-100 flex items-center justify-center"}`}><span className={`${pathname == "/about" ? "hidden" : "hidden group-hover:block text-gray-300 text-base"}`}>About</span></div>

                        <svg className="w-full md:h-16 h-12 md:p-3 p-2.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke={`${pathname === "/about" ? "#000" : "#ccc"}`} stroke-width="1" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className={`${pathname == "/about" ? "text-black" : "text-gray-300"} text-sm -translate-y-2 md:hidden`}>About</span>

                    </Link>
                    <Link href="/articles" onClick={() => { setPage("articles") }} className={`${pathname == "/articles" ? "bg-gradient-to-tr from-primary to-secondary" : "hover:bg-green-900"} w-1/4 md:w-auto transition-all flex flex-col items-center group overflow-hidden`}>
                        <div className={`${pathname == "/articles" ? "" : "absolute z-50 right-full px-5 h-16 bg-green-600 invisible opacity-0 transition-all duration-200 translate-x-8 group-hover:-translate-x-1 group-hover:visible group-hover:opacity-100 flex items-center justify-center"}`}><span className={`${pathname == "/articles" ? "hidden" : "hidden group-hover:block text-gray-300 text-base"}`}>Articles</span></div>
                        <svg className="w-full md:h-16 h-12 md:p-4 p-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke={`${pathname === "/articles" ? "#000" : "#ccc"}`} stroke-linejoin="round" stroke-width="1" d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                        </svg>
                        <span className={`${pathname == "/articles" ? "text-black" : "text-gray-300"} text-sm -translate-y-2 md:hidden`}>Articles</span>

                    </Link>
                    <Link href="/contact" onClick={() => { setPage("contact") }} className={`${pathname == "/contact" ? "bg-gradient-to-tr from-primary to-secondary" : "hover:bg-green-900"} w-1/4 md:w-auto transition-all flex flex-col items-center group overflow-hidden`}>
                        <div className={`${pathname == "/contact" ? "" : "absolute z-50 right-full px-5 h-16 bg-green-600 invisible opacity-0 transition-all duration-200 translate-x-8 group-hover:-translate-x-1 group-hover:visible group-hover:opacity-100 flex items-center justify-center"}`}><span className={`${pathname == "/contact" ? "hidden" : "hidden group-hover:block text-gray-300 text-base"}`}>Contact</span></div>

                        <svg className="w-full md:h-16 h-12 md:p-4 p-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke={`${pathname === "/contact" ? "#000" : "#ccc"}`} stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1" />
                        </svg>
                        <span className={`${pathname == "/contact" ? "text-black" : "text-gray-300"} text-sm -translate-y-2 md:hidden`}>Contact</span>

                    </Link>
                </div>

                {/* <div className="sticky top-8 left-0">
                    <Link href="/">
                        <svg className="w-full h-16 p-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                        </svg>
                    </Link>
                </div> */}
            </div>


        </div>
    )
}

export default Navigation;