import Link from "next/link";

const Navigation = () => {
    return (
        <div className="z-45 sticky top-0 flex flex-col justify-between h-screen min-h-screen w-20 py-8 bg-gradient-to-r from-[#18181b] to-[#222225] ">
            <div className="sticky top-8 left-0">
                <Link href="/">
                    <svg className="w-full h-20 p-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                    </svg>
                </Link>
            </div>

            <div className="sticky left-0">
                <a href="/">
                    <svg className=" w-full h-20 p-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                    </svg>
                </a>
            </div>

        </div>
    )
}

export default Navigation;