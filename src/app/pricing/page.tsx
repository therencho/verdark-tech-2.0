import FAQ from "@/components/FAQ";
import PricingCard from "@/components/PricingCard";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <PricingCard />
      <div className="mb-24">
      <FAQ />

      </div>
    </>
  );
};

export default page;
