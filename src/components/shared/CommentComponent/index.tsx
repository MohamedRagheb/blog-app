// Types
import type { IComment } from "@/types";

// Components
import Image from "next/image";

export default function Comment({ comment }: { comment: IComment }) {
  return (
    <div className="px-4 py-6 flex gap-3 border border-gray-300 rounded-lg shadow-md">
      {/*user info*/}
      <Image
        height={40}
        width={40}
        src={`https://ui-avatars.com/api/?background=random&size=40&name=${comment?.name.replaceAll(" ", "+")}`}
        className="h-10 w-10 rounded-full"
        alt={comment.name + "image"}
      />
      <div className="flex flex-col ">
        <span className="space-y-1">
          <h5 className="text-md font-bold text-black">{comment.name}</h5>
          <h5 className="text-sm text-gray-500">{comment.email}</h5>
        </span>
        <p>{comment.body}</p>
      </div>
    </div>
  );
}
