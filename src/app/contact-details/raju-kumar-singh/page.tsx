"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
    VERSION:3.0
    FN:Raju Kumar Singh
    TITLE:Business Development Manager
    TEL;TYPE=CELL:+971508201569
    TEL;TYPE=WORK:+971508201569
    EMAIL;TYPE=WORK:vedarksouq@gmail.com
    URL:https://vedarktech.com
    ADR;TYPE=WORK:;;1351\, burjuman business tower\, burjuman\, bur Dubai;UAE
    END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "raju_kumar_singh.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="mb-20 ">
      <section className="bg-slate-950">
        <div className="py-2 lg:py-2 mb-8 lg:mb-2 px-4 mx-auto max-w-screen-md">
          <div className="mx-auto max-w-4xl text-center mt-14">
            <h1 className=" text-lg font-semibold leading-7 text-gradient">
              Contact Details
            </h1>
            <p className="mt-2 text-4xl tracking-tight font-extrabold  text-white">
              Raju Kumar Singh
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
            <p className="mx-auto mt-2 max-w-2xl text-center text-lg leading-8 text-slate-300">
              Business Development Manager
            </p>
          </div>

          <div className=" text-white mt-10 space-y-4 ">
            <div className="flex justify-center items-center gap-1">
              <p>Mobile Number: </p>
              <Link href={"tel:971508201569"} className="hover:underline">
                +971 50 820 1569
              </Link>
            </div>
            <div className="flex justify-center items-center gap-1">
              <p>Whatsapp Number: </p>
              <Link
                href={"https://wa.me/971508201569"}
                className="hover:underline"
              >
                +971 50 820 1569
              </Link>
            </div>{" "}
            <div className="flex justify-center items-center gap-1">
              <p>Email Address: </p>
              <Link
                href={"mailto:vedarksouq@gmail.com"}
                className="hover:underline"
              >
                vedarksouq@gmail.com
              </Link>
            </div>
            <div className="flex justify-center items-center gap-1">
              <p>Telegram: </p>
              <Link href={"https://t.me/vedark"} className="hover:underline">
                @Vedark
              </Link>
            </div>
            <div className="flex justify-center items-center gap-1">
              <p>Office Address: </p>
              <p>1351, burjuman business tower, burjuman, bur Dubai, UAE</p>
            </div>
            <div className="flex justify-center items-center">
              <Button onClick={handleSaveContact}>Save Contact</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
