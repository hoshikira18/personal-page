import type { Metadata } from "next";
import ArticleDetail from "@/app/components/articles/ArticleDetail";
export const metadata: Metadata = {
  title: "Hoshikira | Articles",
  icons: {
    icon: "/favicon.png",
  },
};

const Post = () => {
  return (
    <div className="w-full">
      <ArticleDetail />
    </div>
  );
};

export default Post;
