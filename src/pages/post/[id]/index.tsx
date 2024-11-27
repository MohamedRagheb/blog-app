// Utils
import SecureFetch from "@/utils/secureFetch";

// Types
import type { IBlogPost, IComment } from "@/types";
import type { GetServerSideProps } from "next";
import type { InferGetServerSidePropsType } from "next";

// Components
import Comment from "@/components/shared/CommentComponent";

// Head
import Head from "next/head";

export const getServerSideProps = (async ({ params }) => {
  const blogData = await SecureFetch<IBlogPost | null>({
    path: `https://jsonplaceholder.typicode.com/posts/${params?.id}`,
    dataDefaultValue: null,
  });
  const comments = await SecureFetch<IComment[]>({
    path: `https://jsonplaceholder.typicode.com/comments?postId=${blogData?.id}`,
    dataDefaultValue: [],
  });
  return { props: { blogData, comments } };
}) satisfies GetServerSideProps<{
  blogData: IBlogPost | null;
  comments: IComment[];
}>;

export default function PostPage({
  blogData,
  comments,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Blog App | {blogData?.title.toString()}</title>
      </Head>
      <div>
        {/*Info Section*/}
        <div className="space-y-2 m-auto">
          <h3 className="font-bold md:text-[45px] text-2xl leading-10">
            {blogData?.title}
          </h3>
          <p className="text-gray-700 text-lg px-2">{blogData?.body}</p>
        </div>
        {/*Comments Section*/}
        <div className="space-y-3 mt-10">
          <h4 className="font-semibold text-xl mb-0">Comments</h4>
          {comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      </div>
    </>
  );
}
