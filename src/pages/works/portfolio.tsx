/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React from "react";
import { Seo } from "src/components/Seo";

const Work: NextPage = () => {
  const { theme } = useTheme();
  return (
    <div className="max-w-xl mx-auto px-4 pt-5">
      <Seo
        pageTitle="Web page - ポートフォリオサイト"
        pageImg={"https://www.otacle.com/works/portfolio"}
        pageImgWidth={1280}
        pageImgHeight={960}
        pagePath={"/works/portfolio"}
      />
      <Link href="/works">
        <a className="text-sm pr-1 dark:text-[#F5FFFA]">Works /</a>
      </Link>
      <h2 className="section-title mt-1 dark:text-[#F5FFFA]">
        ポートフォリオサイト
      </h2>
      <p className="text-sm sm:text-[15px] leading-6 mt-5 dark:text-[#F5FFFA] block rounded-md bg-[#E6F0EB] dark:bg-[#464646] px-3 py-4">
        今ご覧になっているWebサイトです。
        <br />
        私自身が開発したアプリやWebサイト、登壇経験等をまとめていきます。
      </p>
      <h3 className="text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]">
        Presentation slide
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://speakerdeck.com/otaclet/zi-ji-shao-jie"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://speakerdeck.com/otaclet/zi-ji-shao-jie
      </a>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7">
        <Image
          className="object-cover"
          alt="ポートフォリオサイトの画像"
          src={
            theme === "dark" ? "/portfolio-top.jpg" : "/portfolio-top--dark.jpg"
          }
          width={600}
          height={360}
        />
      </div>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-3">
        <Image
          className="object-cover"
          alt="ポートフォリオサイトの画像"
          src={
            theme === "dark"
              ? "/portfolio-work.jpg"
              : "/portfolio-work--dark.jpg"
          }
          width={600}
          height={360}
        />
      </div>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-3">
        <Image
          className="object-cover"
          alt="ポートフォリオサイトの画像"
          src={
            theme === "dark"
              ? "/portfolio-single.jpg"
              : "/portfolio-single--dark.jpg"
          }
          width={600}
          height={360}
        />
      </div>
    </div>
  );
};

export default Work;
