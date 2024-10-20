import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 mb-10">
      <div className="mx-auto max-w-4xl text-center mt-14">
        <h1 className=" text-lg font-semibold leading-7 text-gradient">
          Blogs
        </h1>
        <p className="mt-2 text-4xl tracking-tight font-extrabold  text-white">
         Explore our knowledge Base
        </p>
        <div className="w-[22rem] md:w-[40rem] mx-auto h-2 mt-4 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-300">
          We have curated information that you need to understand Vedark and Crypto Trading.
        </p>{" "}
      </div>

      <div className="flex justify-center mx-auto max-w-screen-xl items-center gap-4 flex-wrap">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default page;
