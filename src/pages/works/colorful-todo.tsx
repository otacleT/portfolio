import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Work: NextPage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 pt-5">
      <Head>
        <title>Taisei Miyabe - Colorful Todoアプリ</title>
      </Head>
      <Link href="/works">
        <a className="text-sm pr-1 dark:text-[#F5FFFA]">Works /</a>
      </Link>
      <h2 className="section-title mt-1 dark:text-[#F5FFFA]">
        Colorful Todoアプリ
      </h2>
      <p className="text-sm sm:text-[15px] leading-6 mt-5 indent-[1em] dark:text-[#F5FFFA] block rounded-md bg-[#E6F0EB] dark:bg-[#464646] px-3 py-4">
        直観的なUI/UXにこだわったColorfull Todoアプリ
      </p>
      <h3 className="text-xs sm:text-sm font-bold mt-5 dark:text-[#F5FFFA]">
        URL
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://todo-app-flax-two.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://todo-app-flax-two.vercel.app/
      </a>
      <h3 className="text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]">
        Github
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://github.com/otacleT/todo-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/otacleT/todo-app
      </a>
      <h3 className="text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]">
        Hackathon page
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://topaz.dev/projects/c24780e6ee0f85f5a712"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://topaz.dev/projects/c24780e6ee0f85f5a712
      </a>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7">
        <Image
          className="object-cover"
          alt="Colorful Todoアプリの画像"
          src="/todo-top.png"
          width={600}
          height={360}
        />
      </div>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-3">
        <Image
          className="object-cover"
          alt="Colorful Todoアプリの画像"
          src="/todo-modal.png"
          width={600}
          height={360}
        />
      </div>
    </div>
  );
};

export default Work;
