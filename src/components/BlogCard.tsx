import { FC } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/data";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <CardContainer className="inter-var">
      <Link href={`/blog/${post.id}`}>
        <CardBody className=" relative group/card hover:shadow-2xlhover:shadow-emerald-500/[0.1] bg-slate-900 border-white/[0.2]  w-auto max-w-80 sm:w-[30rem] h-auto min-h-[30rem] rounded-xl p-6 border  ">
          <CardItem translateZ="100" className="w-full mt-4 cursor-pointer">
            <Image
              src={post.content.image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl mt-4 font-bold  text-white"
          >
            {post.title}
          </CardItem>

          {/* <CardItem
            as="p"
            translateZ="60"
            className=" text-sm max-w-sm mt-2 text-neutral-300"
          >
            {post.content.slice(0, 100)}...
          </CardItem> */}
          <CardItem translateZ="70" className="text-sm mt-2 text-neutral-400">
            Author: {post.author}
          </CardItem>
          <CardItem translateZ="80" className="text-sm mt-1 text-neutral-400">
            Date: {post.date}
          </CardItem>
        </CardBody>
      </Link>
    </CardContainer>
  );
};

export default BlogCard;
