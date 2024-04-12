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
            <div className=" relative min-h-screen w-full px-8 flex justify-center bg-black ">
                <div className="fixed z-50 top-0 left-0 w-full bg-black h-8"></div>
                <div className="fixed z-50 bottom-0 left-0 w-full bg-black h-8"></div>

                <div className="relative w-full max-w-screen-xl ">
                    <main className="relative h-full bg- bg-gradient-to-tr from-[#18181b] to-[#222225] rounded">
                        <div className="h-full flex flex-col items-center ">
                            {children}
                        </div>
                    </main>
                </div>
                <div className="flex">
                    <div className="w-1 h-full bg-gradient-to-b from-secondary to-primary"></div>
                    <Navigation />
                </div>
            </div >
        </>
    )
}

export default MainLayout;