import { FC } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string
  description: string
  image: StaticImageData
}

const Card: FC<CardProps> = ({title, description, image}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card hover:shadow-2xlhover:shadow-emerald-500/[0.1] bg-slate-900 border-white/[0.2]  w-auto max-w-80 sm:w-[30rem] h-auto max-h-96 rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem translateZ="50" className="text-xl mt-4 font-bold  text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
