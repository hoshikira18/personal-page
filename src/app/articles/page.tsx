import type { Metadata } from "next";
import ListArticles from "../components/articles/ListArticles";

export const metadata: Metadata = {
  title: "Hoshikira | Articles",
  icons: {
    icon: "/favicon.png",
  },
};

const Article = () => {
  return (
    <div className=" min-h-screen w-full bg-gradient-to-tr from-[#151515] to-[#28282c] text-5xl text-gray-300">
      <div className="h-[400px] w-full overflow-hidden">
        <img
          src="/static/articles/cover-image.webp"
          alt="cover-image"
          className="h-full w-full object-cover opacity-80"
        />
      </div>
      <div className="h-0.5 w-full bg-gradient-to-r from-secondary to-primary"></div>
      <ListArticles />
    </div>
  );
};

export default Article;
