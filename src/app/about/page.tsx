import { FC } from "react";
import Heading from "@/components/Heading";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-slate-950 text-white max-w-screen-xl mx-auto p-4">
      <div className="mx-auto max-w-4xl text-center mt-16">
        <h1 className=" text-lg font-semibold leading-7 text-gradient">
          About Us
        </h1>
        <p className="mt-2 text-4xl tracking-tight font-extrabold  text-white">
          Your Trusted Partner in Automated Crypto Trading
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
          Automate your crypto trading with confidence. Vedark is your reliable
          partner for success.
        </p>{" "}
      </div>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-300 uppercase">
              Effortless & Intelligent
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              <span className="text-gradient">Empowering</span> Crypto Success
            </h2>
            <p className="text-slate-300">
              Vedark is a revolutionary cryptocurrency trading platform designed
              to simplify and optimize your journey in the dynamic world of
              crypto. We are a team of passionate crypto enthusiasts and
              experienced developers dedicated to creating innovative tools that
              empower users of all levels to achieve their crypto goals.
              Vedark's user-friendly interface and powerful automation features
              make it easy to set up and manage your trading strategies,
              allowing you to trade crypto 24/7 with confidence and efficiency.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
      <Heading
              title="Results that Speak Volumes"
              subtitle="A Snapshot of Vedark's Impact: How We're Empowering Crypto Traders"
            />
        <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col bg-slate-900 p-8">
            <dt className="text-sm font-semibold leading-6 text-slate-100">
              Active Users
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gradient">
              89,345
            </dd>
          </div>
          <div className="flex flex-col bg-slate-900 p-8">
            <dt className="text-sm font-semibold leading-6 text-slate-100">
              Active Bots
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gradient">
              345,678
            </dd>
          </div>
          <div className="flex flex-col bg-slate-900 p-8">
            <dt className="text-sm font-semibold leading-6 text-slate-100">
              Trading Volume
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gradient">
              $5.6B
            </dd>
          </div>
          <div className="flex flex-col bg-slate-900 p-8">
            <dt className="text-sm font-semibold leading-6 text-slate-100">
              Happy Customers
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gradient">
              98%
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default page;
