import Link from "next/link";
import FadeIn from "../animation/Fadein";
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
    <div className="group relative h-full flex-col justify-between rounded shadow-lg sm:shrink-0 sm:grow sm:basis-0 ">
      <Link
        href={`/articles/${slug}`}
        className="block h-[200px] overflow-hidden rounded-t"
      >
        <img
          className="h-full w-full rounded-t object-cover transition-all duration-300 group-hover:scale-110"
          src={coverImage?.url}
          alt={title}
        />
      </Link>
      <div className="relative flex flex-col space-y-3 px-6 pb-10 pt-6">
        <div>
          <a href={`/articles/${slug}`}>
            <h5 className="mb-2 text-2xl font-bold leading-tight group-hover:text-primary">
              {title}
            </h5>
          </a>
          <p className="mb-4 text-base font-medium text-gray-400">{excerpt}</p>
        </div>
      </div>
      <div className="absolute bottom-4 px-6 text-base font-bold text-gray-500">
        {date}
      </div>
    </div>
  );
};

export default ArticleCard;
