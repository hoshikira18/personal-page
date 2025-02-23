import type { Metadata } from "next";
import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import type { Post } from "@/types";
import { graphQLClient } from "@/query/graphql";

export const metadata: Metadata = {
  title: "Hoshikira | Articles",
};

const getSingleBlog = async (slug: any): Promise<Post> => {
  const query = gql`
    query MyQuery($slug: String!) {
      post(where: { slug: $slug }) {
        id
        date
        coverImage {
          url
        }
        title
        slug
        content {
          html
        }
      }
    }
  `;

  const slugName = {
    slug,
  };

  const response = await graphQLClient.request<{ post: Post }>(query, slugName).then(({ post }) => post)
  return response;
};


const Post = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const post = await getSingleBlog(slug)

  return (
    <div className="w-full pb-10">
      <div className="w-full space-y-10 px-5 pb-20 pt-40 text-gray-300 lg:px-20">
        <div className="not-prose mx-auto w-full overflow-hidden h-96">
          <Image
            width={500}
            height={500}
            src={post.coverImage.url || "https://media.graphassets.com/4P0wxxBTtqKU9nI7Zc80"}
            alt="cover-image"
            className="fade-out mx-auto w-full object-cover"
          />
        </div>
        <header className="mx-auto max-w-3xl space-y-5">
          <h2 className="text-center text-3xl font-bold transition-all md:text-4xl lg:text-5xl">
            {post.title}
          </h2>
          <div className="text-gray-200 text-center">
            {post.date} by <span className="font-semibold text-primary">Kira</span>
          </div>
        </header>
        <div className="mx-auto max-w-prose">
          <div
            className="html space-y-5 text-lg"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          ></div>
        </div>
        <div className="h-0.5 bg-gradient-to-r from-primary to-secondary" />
      </div>
    </div>
  );
};

export default Post;
