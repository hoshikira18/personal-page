"use client";
import React from "react";
import useSWR from "swr";
import ArticleCard from "./ArticleCard";
import { LoadingOverlay, MantineProvider } from "@mantine/core";
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

  return (
    <div className="space-y-5 p-5 md:p-20">
      <h1 className="text-4xl font-bold text-gray-300">List of Articles</h1>
      <h2 className=" text-xl font-normal text-gray-300">
        A few handcrafted articles about my thoughts and experiments.
      </h2>
      {posts.length ? (
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
      ) : (
        <MantineProvider>
          <div className="mx-auto grid h-[500px] grid-cols-1 gap-4  pt-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((e, i) => {
              return (
                <div
                  key={i}
                  className="relative flex h-[500px] w-full items-center justify-center rounded bg-black/30 shadow-lg "
                >
                  <div className="absolute bottom-0 left-0 right-0 top-0 z-20 blur-sm"></div>
                  <div role="status" className="relative z-50">
                    <svg
                      aria-hidden="true"
                      className="h-12 w-12 animate-spin fill-primary text-gray-200 dark:text-gray-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              );
            })}
          </div>
        </MantineProvider>
      )}
    </div>
  );
};

export default ListArticles;
