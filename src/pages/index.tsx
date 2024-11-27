// Types
import type { IBlogPost } from "@/types";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

// Components
import SearchInput from "@/components/shared/SearchInput";
import BlogPostComponent from "@/components/shared/BlogPostComponent";

// Hooks
import { useState } from "react";

// Utils
import SecureFetch from "@/utils/secureFetch";

// Head
import Head from "next/head";

// Fetching Data Of Blogs
export const getServerSideProps = (async () => {
  const blogs = await SecureFetch<IBlogPost[]>({
    path: "https://jsonplaceholder.typicode.com/posts",
    dataDefaultValue: [],
  });
  return { props: { blogs } };
}) satisfies GetServerSideProps<{ blogs: IBlogPost[] }>;

export default function Home({
  blogs,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [search, setSearch] = useState("");

  const searchedBlogs = !!search
    ? blogs?.filter((ele) =>
        ele?.title.toLowerCase().includes(search.toLowerCase()),
      )
    : blogs;
  return (
    <section id="blogs" className="space-y-6">
      <Head>
        <title>Blog App</title>
      </Head>
      <h4 className="font-semibold text-lg mb-0">Blogs</h4>
      <SearchInput
        value={search}
        onChange={(e) => setSearch(e?.target?.value)}
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {searchedBlogs?.map((ele) => (
          <BlogPostComponent BlogInfo={ele} key={ele?.id} />
        ))}
      </div>
    </section>
  );
}
