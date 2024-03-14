import BackgroundBeamsSection from "@/components/BackgroundBeamsSection";
import Card from "@/components/Card";
import CardStackSection from "@/components/CardStackSection";
import Heading from "@/components/Heading";
import MacbookScrollSection from "@/components/MacbookScrollSection";
import Typewriter from "@/components/Typewriter";
import Hero from "@/components/hero";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
const AceternityLogo = () => {
  return (
    <svg
      width="216"
      height="66"
      viewBox="0 0 216 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M64.8 0.300049H0V65.1H64.8V0.300049ZM43.1999 21.9001H21.5999V43.5001H43.1999V21.9001Z"
        fill="black"
      ></path>
      <rect
        x="75.6"
        y="0.300049"
        width="21.6"
        height="64.8"
        fill="black"
      ></rect>
      <rect x="97.2001" y="21.9" width="21.6" height="21.6" fill="black"></rect>
      <rect
        x="118.8"
        y="0.300049"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
      <rect
        x="118.8"
        y="43.5001"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
      <rect x="172.8" y="21.9" width="21.6" height="21.6" fill="black"></rect>
      <rect
        x="194.4"
        y="0.300049"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
      <rect
        x="194.4"
        y="43.5001"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
      <rect
        x="151.2"
        y="0.300049"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
      <rect
        x="151.2"
        y="43.5001"
        width="21.6"
        height="21.6"
        fill="black"
      ></rect>
    </svg>
  );
};
const AceternityLogo2 = () => {
  return (
    <svg
      width="81"
      height="31"
      viewBox="0 0 213 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_11598_26"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="213"
        height="82"
      >
        <path d="M213 0H0V82H213V0Z" fill="white"></path>
      </mask>
      <g mask="url(#mask0_11598_26)">
        <path
          d="M35.3303 25.3012C35.5746 13.2597 28.7261 2.76693 25.1591 0.245125C25.1429 0.228887 24.8252 0.0586251 24.8495 0.528935C24.8495 0.537013 24.8414 0.537013 24.8414 0.545133C24.4751 23.2904 12.7321 29.4206 6.35585 37.7563C-7.81372 56.2927 4.01043 77.4407 19.3282 81.4461C19.589 81.5112 20.2974 81.722 21.6411 81.9975C22.3414 82.1437 22.5451 81.5516 22.0318 80.6677C20.1996 77.4972 16.9422 72.1454 16.2991 65.2691C14.8333 49.3029 35.0451 39.3131 35.3303 25.3012Z"
          fill="black"
        ></path>
        <path
          d="M43.0504 33.0127C42.9283 32.9234 42.7575 32.9315 42.7412 33.0854C42.4154 35.9805 39.4103 41.981 35.4526 47.5921C22.1297 66.5099 28.8402 75.0888 34.052 81.0409C35.0128 82.1436 35.4931 81.9005 35.9983 81.114C36.4705 80.3679 37.187 79.4191 40.2656 77.9677C40.7459 77.7407 52.3749 71.5943 53.6371 57.5986C54.8506 44.0568 46.1285 35.4937 43.0504 33.0127Z"
          fill="black"
        ></path>
        <path
          d="M112.23 29.5664V79.3461H101.505V59.2367H80.8934V79.3461H69.8998V29.5664H80.8934V49.6762H101.505V29.5664H112.23Z"
          fill="black"
        ></path>
        <path
          d="M161.815 29.5664V39.4104H156.709H146.416V79.338H135.382V39.4104H125.365H120.259V29.5664H161.815Z"
          fill="black"
        ></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M200.871 79.3949L188.265 62.0744L175.757 79.3218L163.525 79.338L182.068 53.9253L164.567 29.5664H176.791L213.045 79.3949H200.871Z"
          fill="black"
        ></path>
        <path
          d="M191.693 40.7077L197.744 49.0761L212.077 29.5581H199.918L191.693 40.7077Z"
          fill="black"
        ></path>
      </g>
    </svg>
  );
};

const AceternityLogo3 = () => {
  return (
    <svg
      width="133"
      height="21"
      viewBox="0 0 133 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.48113 8.8243L10.5975 4.74627L14.716 8.82645L17.1112 6.45348L10.5975 0L4.08594 6.45132L6.48113 8.8243Z"
        fill="black"
      ></path>
      <path
        d="M4.78968 10.5018L2.39453 8.12891L-0.000733341 10.502L2.39441 12.8749L4.78968 10.5018Z"
        fill="black"
      ></path>
      <path
        d="M6.48073 12.1739L10.5971 16.2519L14.7155 12.1719L17.112 14.5435L17.1108 14.5448L10.5971 20.9982L4.08538 14.547L4.08203 14.5437L6.48073 12.1739Z"
        fill="black"
      ></path>
      <path
        d="M18.8 12.873L21.1953 10.5L18.8002 8.12707L16.4049 10.5001L18.8 12.873Z"
        fill="black"
      ></path>
      <path
        d="M13.0331 10.4978H13.0341L10.6036 8.08984L8.80738 9.86936H8.80721L8.60096 10.0739L8.17522 10.4957L8.17188 10.499L8.17522 10.5025L10.6036 12.9083L13.0341 10.5003L13.0352 10.499L13.0331 10.4978Z"
        fill="black"
      ></path>
      <path
        d="M24.9336 5.08984H30.143C31.4359 5.08984 32.4136 5.41858 33.0763 6.07605C33.589 6.58525 33.8454 7.21635 33.8454 7.96919V8.00103C33.8454 8.31915 33.8057 8.60029 33.7258 8.8441C33.6461 9.08825 33.5397 9.30802 33.4066 9.50423C33.2738 9.70061 33.1195 9.87294 32.944 10.0212C32.7684 10.1698 32.5797 10.2972 32.3776 10.403C33.0275 10.6472 33.5392 10.9784 33.9122 11.3974C34.285 11.8165 34.4717 12.3972 34.4717 13.1394V13.1711C34.4717 13.6803 34.3729 14.1256 34.1752 14.5076C33.9775 14.8892 33.6942 15.2075 33.3254 15.4621C32.9566 15.7167 32.5131 15.9075 31.9948 16.0348C31.4765 16.1621 30.9021 16.2256 30.2717 16.2256H24.9336V5.08984ZM29.6222 9.5918C30.1683 9.5918 30.6019 9.49925 30.9228 9.31349C31.2439 9.12789 31.4045 8.82818 31.4045 8.41469V8.38285C31.4045 8.01181 31.2652 7.72819 30.9869 7.53181C30.7085 7.3356 30.3071 7.23741 29.7827 7.23741H27.342V9.5918H29.6222ZM30.2806 14.0782C30.8266 14.0782 31.2545 13.9803 31.5652 13.7839C31.8756 13.5877 32.0309 13.2827 32.0309 12.8691V12.8374C32.0309 12.4662 31.8863 12.1719 31.5973 11.9543C31.3082 11.7372 30.8426 11.6284 30.2003 11.6284H27.342V14.0783H30.2806V14.0782Z"
        fill="black"
      ></path>
      <path
        d="M37.5781 5.08984H40.0512V16.2259H37.5781V5.08984Z"
        fill="black"
      ></path>
      <path
        d="M43.793 5.08984H46.0728L51.3398 11.9465V5.08984H53.7805V16.2259H51.6772L46.2335 9.14663V16.2259H43.793V5.08984Z"
        fill="black"
      ></path>
      <path
        d="M61.2669 5.00781H63.5469L68.3644 16.2233H65.779L64.7513 13.7258H59.9982L58.9706 16.2233H56.4492L61.2669 5.00781ZM63.8682 11.562L62.3747 7.95085L60.8817 11.562H63.8682Z"
        fill="black"
      ></path>
      <path
        d="M71.0352 5.08984H73.3155L78.5822 11.9465V5.08984H81.0229V16.2259H78.9195L73.4759 9.14663V16.2259H71.0352V5.08984Z"
        fill="black"
      ></path>
      <path
        d="M89.9171 16.4161C89.0924 16.4161 88.3273 16.2675 87.6207 15.9708C86.914 15.6741 86.3039 15.2682 85.7902 14.7537C85.2762 14.2394 84.8746 13.6322 84.5859 12.9322C84.2968 12.2321 84.1523 11.4844 84.1523 10.689V10.6573C84.1523 9.86182 84.2968 9.11694 84.5859 8.42215C84.8747 7.72753 85.2762 7.11766 85.7902 6.59271C86.3038 6.06776 86.9195 5.65393 87.6366 5.35174C88.3536 5.04954 89.1463 4.89844 90.0133 4.89844C90.5375 4.89844 91.0165 4.94106 91.4501 5.02565C91.8837 5.11074 92.2769 5.22717 92.6305 5.37562C92.9839 5.52423 93.31 5.70452 93.6102 5.91649C93.9094 6.12879 94.188 6.36199 94.4449 6.61659L92.8716 8.41419C92.4321 8.02193 91.9855 7.71409 91.5306 7.49151C91.0754 7.26892 90.5645 7.15746 89.9971 7.15746C89.526 7.15746 89.0897 7.24769 88.6886 7.42798C88.2871 7.60827 87.9418 7.8574 87.6526 8.17552C87.3638 8.49364 87.139 8.86235 86.9781 9.28115C86.8179 9.70028 86.7377 10.1483 86.7377 10.6254V10.6571C86.7377 11.1343 86.8179 11.5853 86.9781 12.0092C87.139 12.4337 87.3607 12.8047 87.6448 13.1228C87.9282 13.4409 88.2709 13.693 88.6722 13.8786C89.074 14.0644 89.5154 14.157 89.9971 14.157C90.6396 14.157 91.1824 14.0404 91.6267 13.807C92.071 13.574 92.5128 13.2557 92.9516 12.8525L94.5253 14.4275C94.2362 14.7351 93.936 15.011 93.6261 15.2546C93.3156 15.4988 92.9757 15.7081 92.6062 15.8832C92.2371 16.0581 91.8326 16.1909 91.3942 16.2808C90.9549 16.3709 90.4627 16.4161 89.9171 16.4161Z"
        fill="black"
      ></path>
      <path
        d="M97.4375 5.08984H105.9V7.26942H99.8784V9.52845H105.177V11.7079H99.8784V14.0465H105.98V16.2259H97.4375V5.08984Z"
        fill="black"
      ></path>
      <path
        d="M109.297 14.5153H110.904V16.1097H109.297V14.5153Z"
        fill="black"
      ></path>
      <path
        d="M117.303 16.2347C115.853 16.2347 114.755 15.8596 114.009 15.1093C113.263 14.359 112.89 13.2544 112.89 11.7956V5.08989H114.167V11.905C114.167 12.9783 114.429 13.7859 114.955 14.3278C115.491 14.8696 116.273 15.1406 117.303 15.1406C118.333 15.1406 119.11 14.8696 119.636 14.3278C120.161 13.7859 120.424 12.9783 120.424 11.905V5.08989H121.716V11.7956C121.716 13.244 121.338 14.3486 120.581 15.1093C119.835 15.8596 118.742 16.2347 117.303 16.2347Z"
        fill="black"
      ></path>
      <path
        d="M127.904 16.2347C126.17 16.2347 124.783 15.771 123.743 14.8436L124.248 13.8588C124.794 14.3173 125.351 14.6456 125.918 14.8436C126.496 15.0416 127.163 15.1406 127.92 15.1406C128.813 15.1406 129.501 14.9686 129.984 14.6248C130.468 14.2809 130.709 13.7963 130.709 13.1711C130.709 12.8064 130.594 12.5094 130.363 12.2801C130.132 12.0509 129.827 11.8685 129.449 11.733C129.07 11.5976 128.561 11.4569 127.92 11.311C127.058 11.113 126.349 10.9046 125.792 10.6858C125.246 10.4669 124.799 10.1543 124.453 9.74791C124.116 9.3415 123.948 8.81005 123.948 8.15355C123.948 7.52832 124.111 6.97602 124.437 6.49668C124.773 6.00691 125.246 5.63176 125.855 5.37125C126.475 5.10031 127.19 4.96484 127.999 4.96484C128.766 4.96484 129.48 5.08468 130.142 5.32436C130.815 5.56403 131.382 5.90791 131.844 6.356L131.356 7.34074C130.83 6.89266 130.294 6.56962 129.748 6.37163C129.212 6.16322 128.629 6.05901 127.999 6.05901C127.137 6.05901 126.459 6.24137 125.966 6.60609C125.482 6.96039 125.241 7.46058 125.241 8.10666C125.241 8.65895 125.456 9.07578 125.887 9.35713C126.318 9.63849 126.969 9.87817 127.841 10.0762C128.797 10.3054 129.548 10.519 130.095 10.717C130.641 10.9046 131.093 11.1912 131.45 11.5767C131.818 11.9623 132.002 12.4781 132.002 13.1242C132.002 13.7494 131.834 14.2965 131.497 14.7654C131.172 15.2344 130.699 15.5991 130.079 15.8596C129.459 16.1097 128.734 16.2347 127.904 16.2347Z"
        fill="black"
      ></path>
    </svg>
  );
};

const testimonials = [
  {
    images: <AceternityLogo />,
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    images: <AceternityLogo2 />,

    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    images: <AceternityLogo3 />,
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    images: <AceternityLogo2 />,

    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    images: <AceternityLogo3 />,

    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const words = `Simple Safe Secure`;

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-10">
      <Hero />
      <InfiniteMovingCards
        items={testimonials}
        speed="normal"
        direction="right"
        className="my-10"
      />
      <TextGenerateEffect words={words} className="my-2 w-full p-10" />

      <StickyScroll content={content} />

      <Heading title="Why Us"/>
      <div className="grid grid-cols-3 gap-8 justify-center my-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <MacbookScrollSection />

      <InfiniteMovingCards
        items={testimonials}
        speed="normal"
        direction="right"
      />
      <BackgroundBeamsSection />

      <CardStackSection />

      <Typewriter />
    </main>
  );
}
