import type { Metadata } from "next";
import ArticleDetail from "@/app/components/articles/ArticleDetail";
export const metadata: Metadata = {
  title: "Hoshikira | Articles",
};

const Post = () => {
  return (
    <div className="w-full">
      <ArticleDetail />
    </div>
  );
};

export default Post;
