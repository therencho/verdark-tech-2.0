import Blog from "@/components/Blog";
import { blogPosts } from "@/lib/data";
import { FC } from "react";

interface PageProps {
  params: { blogId: string };
}

const Page: FC<PageProps> = ({ params }) => {
  // Find the blog post with the matching id
  const blogPost = blogPosts.find(
    (post) => post.id === parseInt(params.blogId as string)
  );

  if (!blogPost) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-gray-800">Blog post not found</p>
      </div>
    );
  }

  return (
    <Blog
      content={blogPost.content}
      imageUrl={blogPost.content.image}
      author={blogPost.author}
      date={blogPost.date}
    />
  );
};

export default Page;
