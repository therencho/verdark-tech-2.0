import styles from "../lib/style";
import discount from "../../public/assets/Discount.svg";
import robot from "../../public/assets/crypto.png";
import Image from "next/image";
import arrowUp from "../../public/assets/arrow-up.svg";
import Link from "next/link";

const GetStarted = () => (
  <Link href='/pricing' >
<div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <Image
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
  </Link>
  
);
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} max-w-screen-xl mx-auto`}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col `}>
        <div className="flex flex-row items-center py-[6px] px-4 mx-auto md:mx-0 bg-slate-900 rounded-[10px] mb-2">
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Maximise Profit,</span>
            <span className="text-gradient"> Use Vedark</span>{" "}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 text-center md:text-start font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Future of <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Crypto Trading</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins text-center  md:text-start font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          is Here.
        </h1>
        <div className="flex justify-between items-center text-center md:text-start">
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
            Sit back and relax while Vedark manages your crypto trades
            with its advanced automation and risk management features.
          </p>
          <div className="hidden md:block ml-8">
            <GetStarted />
          </div>
        </div>
        {/* <div className="flex justify-end w-full">
          </div> */}
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative md:-right-[7.4rem] -right-4`}
      >
        <Image
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
