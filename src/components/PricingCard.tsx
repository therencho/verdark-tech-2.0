"use client";
import { FC, useState } from "react";
import { ButtonForFun } from "./ui/moving-border";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import toast from "react-hot-toast";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Terminal } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface PricingCardProps {}

const PricingCard: FC<PricingCardProps> = ({}) => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    city: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = () => {
    const isFieldEmpty = Object.values(formData).some((value) => value === "");

    if (isFieldEmpty) {
      toast.error("Please fill in all the fields.");
    } else {
      setShowSuccessAlert(true);
      // Close the modal after showing the success message
      setTimeout(() => {
        setIsModalOpen(false);
      }, 8000); // Close the modal after 3 seconds (adjust the delay as needed)
      // Add any other logic here, like sending the form data to the server
    }
  };

  return (
    <div className="pt-5 bg-gray-950" id="pricing">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <div className="mx-auto pb-20 mt-4 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mt-14">
            <h1 className=" text-lg font-semibold leading-7 text-gradient">
              Pricing
            </h1>
            <p className="mt-2 text-4xl tracking-tight font-extrabold  text-white">
              Unveiling Your Perfect Vedark Plan
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
            Choose the Right Powerhouse for Your Crypto Journey
            </p>
          </div>

          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  id="product1"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Starter
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
              Simple and cost-effective for beginners
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  $ 29 / Month
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300"></span>
              </p>
              <DialogTrigger asChild>
                <button className="border text-sm font-medium w-full my-4 relative border-neutral-200 border-white/[0.2]  text-white px-6 py-4 rounded-full">
                  <a href="/">Order now</a>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button>
              </DialogTrigger>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Basic Trading Strategies (e.g., Grid Trading)
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Limited Backtesting Capabilities
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  1 Active Trading Bot
                </li>
              </ul>
            </div>

            <div className="bg-white/5 ring-2 ring-gradient rounded-3xl p-8 xl:p-10">
              <div className="flex items-baseline justify-between gap-x-4">
                <h2
                  id="product2"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Pro
                </h2>
                <p className="rounded-full bg-slate-950 border-2 border-slate-600 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                  Most popular
                </p>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
              Ideal for experienced traders seeking more customization
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  $ 79 / Month
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300"></span>
              </p>
              <div className=" w-full my-4 relative mx-auto ">
                <DialogTrigger asChild>
                  <ButtonForFun
                    borderRadius="1.75rem"
                    className="bg-slate-900 text-white border-slate-800 w-full"
                  >
                    {" "}
                    Order now{" "}
                  </ButtonForFun>
                </DialogTrigger>
              </div>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Advanced Trading Strategies (e.g., Arbitrage)
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Extended Backtesting Capabilities
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  3 Active Trading Bots
                </li>
              </ul>
            </div>

            <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h2
                  id="product3"
                  className="text-lg font-semibold leading-8 text-white"
                >
                  Enterprise
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
              Suited for high-volume traders or teams
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  $ 199 / Month
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300"></span>
              </p>
              <DialogTrigger asChild>
                <button className="border text-sm font-medium w-full my-4 relative border-neutral-200 border-white/[0.2]  text-white px-6 py-4 rounded-full">
                  <a href="/">Order now</a>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button>
              </DialogTrigger>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Custom Trading Strategy Development
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Unlimited Backtesting & Analytics
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-white"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  5+ Active Trading Bots
                </li>
              </ul>
            </div>
          </div>
        </div>
        <DialogContent className="sm:max-w-[425px] bg-slate-950 border-slate-600 text-white">
          <DialogHeader>
            <DialogTitle>Place Order</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          {showSuccessAlert && (
            <Alert variant="destructive">
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                We Will Send You The Payment Details On Your Email Within 2
                Working Days.
              </AlertDescription>
            </Alert>
          )}
          <div className="grid gap-4 py-4">
            <div className="flex justify-center items-center gap-4">
              <div className="">
                <Label htmlFor="firstName" className="text-right">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter First Name"
                  className="col-span-3"
                />
              </div>
              <div className="">
                <Label htmlFor="lastName" className="text-right">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter Last Name"
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="">
              <Label htmlFor="companyName" className="text-right">
                Company name (optional)
              </Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="col-span-3"
              />
            </div>

            <div className="">
              <Label htmlFor="city" className="text-right">
                Town / City *
              </Label>
              <Input
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="Town / City"
                className="col-span-3"
              />
            </div>
            <div className="">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone"
                className="col-span-3"
              />
            </div>
            <div className="">
              <Label htmlFor="email" className="text-right">
                Email address
              </Label>
              <Input
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="col-span-3"
              />
            </div>
            <h1>Payment Options</h1>
            <div className="text-white">
              <RadioGroup defaultValue="Bank Transfer">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Bank Transfer" id="r1" />
                  <Label htmlFor="r1">Bank Transfer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="Credit - Debit/PayPal Invoice"
                    id="r2"
                  />
                  <Label htmlFor="r2">Credit - Debit/PayPal Invoice</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Bitcoin" id="r3" />
                  <Label htmlFor="r3">Bitcoin</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Others Crypto Currency" id="r4" />
                  <Label htmlFor="r4">Others Crypto Currency</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={onSubmit}>
              Place Order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PricingCard;
