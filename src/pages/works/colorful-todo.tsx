/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Seo } from "src/components/Seo";

const Work: NextPage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 pt-5">
      <Seo
        pageTitle="Web app - Colorful Todoアプリ"
        pageImg={"https://www.otacle.com/works/colorful-todo"}
        pageImgWidth={1280}
        pageImgHeight={960}
        pagePath={"/works/colorful-todo"}
      />
      <Link href="/works">
        <a className="text-sm pr-1 dark:text-[#F5FFFA]">Works /</a>
      </Link>
      <h2 className="section-title mt-1 dark:text-[#F5FFFA]">
        Colorful Todoアプリ
      </h2>
      <p className="text-sm sm:text-[15px] leading-6 mt-5 dark:text-[#F5FFFA] block rounded-md bg-[#E6F0EB] dark:bg-[#464646] px-3 py-4">
        タスクの期限を絵文字で表現したり、ドラッグアンドドロップを実装するなど、直観的なUI/UXを意識したTodoアプリです。
        このアプリでは、CRUD(Create, Read, Update,
        Delete)を満たすように実装を行いました。
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
