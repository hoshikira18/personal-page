"use client";
import React from "react";
import useSWR from "swr";
import ArticleCard from "./ArticleCard";
import Pan from "../animation/Pan";
interface Post {
  date?: string;
  excerpt?: string;
  id?: string;
  slug?: string;
  title?: string;
  coverImage?: {
    url?: string;
  };
}

interface ListArticlesProps {
  posts: Post[];
}

const endPoint: any = process.env.NEXT_PUBLIC_END_POINT;

const fetcher = async ([url, query]: [url: string, query: string]) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const ListArticles = () => {
  const { data: { data: { posts = [] } = {} } = {}, error } = useSWR(
    [
      endPoint,
      `
      query Posts {
        posts {
          date
          excerpt
          id
          slug
          title
          coverImage {
            url
          }
        }
      }
    `,
    ],
    fetcher,
  );

  if (error) return <div>Error fetching data</div>;
  if (!posts) return <div>Loading...</div>;

  return (
    <Pan className="space-y-5 p-5 md:p-20">
      <h1 className="text-4xl font-bold text-gray-300">List of Articles</h1>
      <h2 className=" text-xl font-normal text-gray-300">
        A few handcrafted articles about my thoughts and experiments.
      </h2>
      <div className="mx-auto grid grid-cols-1 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <ArticleCard
            key={post.id}
            coverImage={post.coverImage}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            slug={post.slug}
          ></ArticleCard>
        ))}
      </div>
    </Pan>
  );
};

export default ListArticles;
