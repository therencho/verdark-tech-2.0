import Blog from "@/components/Blog";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <div>
    <Blog />
  </div>;
};

export default page;
