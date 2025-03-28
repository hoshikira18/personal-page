import Link from "next/link";
import FadeIn from "../animation/Fadein";
import Image from "next/image";
interface Post {
  date?: string;
  excerpt?: string;
  title?: string;
  coverImage?: {
    url?: string;
  };
  slug?: string;
}

const ArticleCard = ({ date, excerpt, title, coverImage, slug }: Post) => {
  return (
    <Link
      href={`/articles/${slug}`}
      className="group relative h-full flex-col justify-between rounded shadow-lg sm:shrink-0 sm:grow sm:basis-0">
      <div
        className="block h-[200px] overflow-hidden rounded-t"
      >
        <Image
          width={500}
          height={500}
          className="h-full w-full rounded-t object-cover transition-all duration-300 group-hover:scale-110"
          src={coverImage?.url || "https://media.graphassets.com/4P0wxxBTtqKU9nI7Zc80"}
          alt={title || "Artical image"}
        />
      </div>
      <div className="relative flex flex-col space-y-3 px-6 pb-10 pt-6">
        <div>
          <h5 className="mb-2 text-2xl font-bold leading-tight group-hover:text-primary">
            {title}
          </h5>
          <p className="mb-4 text-base font-medium text-gray-400">{excerpt}</p>
        </div>
      </div>
      <div className="absolute bottom-4 px-6 text-base font-bold text-gray-500">
        {date}
      </div>
    </Link>
  );
};

export default ArticleCard;
