import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Seo } from "src/components/Seo";

const Work: NextPage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 pt-5">
      <Seo
        pageTitle="Web app - No Spoilers Twitter!!!"
        pageImg={"https://www.otacle.com/works/no-spoilers-twitter"}
        pageImgWidth={1280}
        pageImgHeight={960}
        pagePath={"/works/no-spoilers-twitter"}
      />
      <Link href="/works">
        <a className="text-sm pr-1 dark:text-[#F5FFFA]">Works /</a>
      </Link>
      <h2 className="section-title mt-1 dark:text-[#F5FFFA]">
        No Spoilers Twitter!!!
      </h2>
      <p className="text-sm sm:text-[15px] leading-6 mt-5 dark:text-[#F5FFFA] block rounded-md bg-[#E6F0EB] dark:bg-[#464646] px-3 py-4">
        Twitterのワードミュート機能の使いずらさを解消したアプリを開発しました。
        このアプリでは、ミュートワードをグループ化することで「ツイートを一括でミュート可能」にし、携帯のアラームアプリのように「履歴からワンクリックでオン/オフ切り替え可能」にすることでTwitterのワードミュート機能の使いずらさを解消しています。
        <br />
        Twitterのタイムライン取得のために必要なアクセストークンをCookieに保存することで、アクセストークン取得のためのリクエスト回数を抑える工夫を行いました。
      </p>
      <h3 className="text-xs sm:text-sm font-bold mt-5 dark:text-[#F5FFFA]">
        URL
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://no-spoilers-twitter.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://no-spoilers-twitter.vercel.app/
      </a>
      <h3 className="text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]">
        Github
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://github.com/otacleT/no-spoilers-twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/otacleT/no-spoilers-twitter
      </a>
      <h3 className="text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]">
        Hackathon page
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://topaz.dev/projects/6dcf17745d7d26ad0c7e"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://topaz.dev/projects/6dcf17745d7d26ad0c7e
      </a>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7">
        <Image
          className="object-cover"
          alt="No Spoilers Twitterの画像"
          src="/twitter-top.png"
          width={600}
          height={360}
        />
      </div>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-3">
        <Image
          className="object-cover"
          alt="No Spoilers Twitterの画像"
          src="/twitter-timeline.png"
          width={600}
          height={360}
        />
      </div>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-3">
        <Image
          className="object-cover"
          alt="No Spoilers Twitterの画像"
          src="/twitter-modal.png"
          width={600}
          height={360}
        />
      </div>
    </div>
  );
};

export default Work;
