// Types
import type { IBlogPost } from "@/types";

// Components
import Link from "next/link";

export default function BlogPostComponent({
  BlogInfo,
}: {
  BlogInfo: IBlogPost;
}) {
  return (
    <div className="border border-black rounded-lg p-4 flex flex-col justify-between gap-2">
      <h6 className="text-xl text-gray-800 font-bold">{BlogInfo?.title}</h6>
      <p className="text-gray-600 truncate relative">{BlogInfo?.body}</p>
      <div className="flex  w-full justify-end">
        <Link href={`/post/${BlogInfo.id}`}>
          <p className="text-black font-bold">Read More</p>
        </Link>
      </div>
    </div>
  );
}
