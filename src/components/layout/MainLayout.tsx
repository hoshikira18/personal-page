"use client";
import Navigation from "./Navigation";
import "@/app/globals.css";
import "@/app/styles/animation/fadeout.css";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative flex min-h-screen w-full justify-center bg-black md:px-0 lg:px-8 ">
      <div className="fixed left-0 top-0 z-[500] hidden h-8 w-full bg-black lg:block"></div>
      <div className="fixed bottom-0 left-0 z-[500] hidden h-8 w-full bg-black lg:block"></div>

      <div className="relative w-full max-w-screen-xl ">
        <main className="bg- relative h-full rounded bg-gradient-to-tr from-[#18181b] to-[#222225]">
          <div className={`flex h-full flex-col items-center pb-20 md:pb-0`}>
            {children}
          </div>
        </main>
      </div>
      <div className="fixed bottom-0 left-0 z-[200] flex-col md:relative md:flex md:flex-row">
        <div className="h-full w-1 bg-gradient-to-b from-secondary to-primary"></div>
        <Navigation />
      </div>
    </div>
  );
};

export default MainLayout;
