import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Work: NextPage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 pt-5">
      <Head>
        <title>Taisei Miyabe - 信頼度に応じた飲食店評価アプリ</title>
      </Head>
      <Link href="/works">
        <a className="text-sm pr-1 dark:text-[#F5FFFA]">Works /</a>
      </Link>
      <h2 className="section-title mt-1 dark:text-[#F5FFFA]">
        信頼度に応じた飲食店評価アプリ
      </h2>
      <p className="text-sm sm:text-[15px] leading-6 mt-5 indent-[1em] dark:text-[#F5FFFA] block rounded-md bg-[#E6F0EB] dark:bg-[#464646] px-3 py-4">
        食べログの訴訟問題で明らかになった既存のグルメサービスの問題を解決するために、ブロックチェーン技術を用いてグルメサービスを実装しました。
        <br />
        技育展2022で登壇し、<strong>優秀賞</strong>をいただくことができました。
      </p>
      <h3 className="text-xs sm:text-sm font-bold mt-5 dark:text-[#F5FFFA]">
        URL
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://gourmet-app.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://gourmet-app.vercel.app/
      </a>
      <h3 className="text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]">
        Github
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://github.com/otacleT/gourmet-app-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/otacleT/gourmet-app-client
      </a>
      <a
        className="text-sm sm:text-[15px] block py-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://github.com/otacleT/gourmet-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/otacleT/gourmet-app
      </a>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7">
        <Image
          className="object-cover"
          alt="信頼度に応じた飲食店評価アプリの画像"
          src="/gourmet-top.png"
          width={600}
          height={360}
        />
      </div>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-3">
        <Image
          className="object-cover"
          alt="信頼度に応じた飲食店評価アプリの画像"
          src="/gourmet-map.png"
          width={600}
          height={360}
        />
      </div>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-3">
        <Image
          className="object-cover"
          alt="信頼度に応じた飲食店評価アプリの画像"
          src="/gourmet-modal.png"
          width={600}
          height={360}
        />
      </div>
    </div>
  );
};

export default Work;
