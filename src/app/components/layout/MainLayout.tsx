import Head from "next/head";
import Navigation from "./Navigation";
import "@/app/globals.css"
interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            {/* <Head>

            </Head> */}
            <div className=" relative min-h-screen w-full lg:px-8 md:px-0 flex justify-center bg-black ">
                <div className="fixed z-50 top-0 left-0 w-full bg-black h-8 hidden lg:block"></div>
                <div className="fixed z-50 bottom-0 left-0 w-full bg-black h-8 hidden lg:block"></div>

                <div className="relative w-full max-w-screen-xl ">
                    <main className="relative h-full bg- bg-gradient-to-tr from-[#18181b] to-[#222225] rounded">
                        <div className="h-full flex flex-col items-center pb-20 md:pb-0">
                            {children}
                        </div>
                    </main>
                    <div className="md:hidden">
                        <Navigation />
                    </div>

                </div>
                <div className="md:flex hidden">
                    <div className="w-1 h-full bg-gradient-to-b from-secondary to-primary"></div>
                    <Navigation />
                </div>
            </div >
        </>
    )
}

export default MainLayout;