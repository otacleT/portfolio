import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Work: NextPage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 pt-5">
      <Link href="/works">
        <a className="text-sm pr-1 dark:text-[#F5FFFA]">Works /</a>
      </Link>
      <h2 className="section-title mt-1 dark:text-[#F5FFFA]">
        九州工科自動車専門学校のHP
      </h2>
      <p className="text-sm sm:text-[15px] leading-6 mt-5 indent-[1em] dark:text-[#F5FFFA] block rounded-md bg-[#E6F0EB] dark:bg-[#464646] px-3 py-4">
        フロント部分のコーディングを行いました。
      </p>
      <h3 className="text-xs sm:text-sm font-bold mt-5 dark:text-[#F5FFFA]">
        URL
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://kyukoo.ac.jp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://kyukoo.ac.jp/
      </a>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7">
        <Image
          className="object-cover"
          alt="九州工科自動車専門学校のHPの画像"
          src="/kyuko-top.JPG"
          width={600}
          height={360}
        />
      </div>
    </div>
  );
};

export default Work;
