import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Works: NextPage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 pt-5">
      <Head>
        <title>Taisei Miyabe - Works</title>
      </Head>
      <h2 className="section-title">Works</h2>
      <h3 className="section-subTitle">- Decentralized app</h3>
      <div className="flex flex-wrap justify-between items-start">
        <Link href="/works/gourmet-app">
          <a className="w-full sm:w-[calc(50%-5px)] block mt-3">
            <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)]">
              <Image
                className="object-cover"
                alt="信頼度に応じた飲食店評価アプリの画像"
                src="/gourmet-top.png"
                width={600}
                height={360}
              />
            </div>
            <h4 className="dark:text-[#F5FFFA] text-[14px] sm:text-[15px] font-semibold text-center mt-3">
              信頼度に応じた飲食店評価アプリ
            </h4>
            <p className="dark:text-[#F5FFFA] text-xs sm:text-sm text-center mt-1">
              ブロックチェーン技術を用いたグルメサービスです。
            </p>
          </a>
        </Link>
      </div>
      <h3 className="section-subTitle mt-8">- Web app</h3>
      <div className="flex flex-wrap justify-between items-start mt-3">
        <Link href="/works/colorful-todo">
          <a className="w-full sm:w-[calc(50%-5px)] block">
            <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)]">
              <Image
                className="object-cover"
                alt="Colorful Todoアプリの画像"
                src="/todo-top.png"
                width={600}
                height={360}
              />
            </div>
            <h4 className="dark:text-[#F5FFFA] text-[14px] sm:text-[15px] font-semibold text-center mt-3">
              Colorful Todo App
            </h4>
            <p className="dark:text-[#F5FFFA] text-xs sm:text-sm text-center mt-1">
              UI/UXにこだわったTodoアプリです。
            </p>
          </a>
        </Link>
        <Link href="/works/no-spoilers-twitter">
          <a className="w-full sm:w-[calc(50%-5px)] block mt-6 sm:mt-0">
            <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)]">
              <Image
                className="object-cover"
                alt="No Spoilers Twitterの画像"
                src="/twitter-top.png"
                width={600}
                height={360}
              />
            </div>
            <h4 className="dark:text-[#F5FFFA] text-[14px] sm:text-[15px] font-semibold text-center mt-3">
              No Spoilers Twitter!!!
            </h4>
            <p className="dark:text-[#F5FFFA] text-xs sm:text-sm text-center mt-1">
              Twitterによるネタバレを防ぐアプリです。
            </p>
          </a>
        </Link>
        <Link href="/works/portfolio">
          <a className="w-full sm:w-[calc(50%-5px)] block mt-6 sm:mt-5">
            <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)]">
              <Image
                className="object-cover"
                alt="ポートフォリオサイトの画像"
                src="/portfolio-top.jpg"
                width={600}
                height={360}
              />
            </div>
            <h4 className="dark:text-[#F5FFFA] text-[14px] sm:text-[15px] font-semibold text-center mt-3">
              ポートフォリオサイト
            </h4>
            <p className="dark:text-[#F5FFFA] text-xs sm:text-sm text-center mt-1">
              今ご覧になっているWebサイトです。
            </p>
          </a>
        </Link>
      </div>
      <h3 className="section-subTitle mt-8">- Web page</h3>
      <div className="flex flex-wrap justify-between items-start space-y-6 sm:space-y-0 mt-3">
        <Link href="/works/kyuko">
          <a className="w-full sm:w-[calc(50%-5px)] block">
            <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)]">
              <Image
                className="object-cover"
                alt="九州工科自動車専門学校のHPの画像"
                src="/kyuko-top.jpg"
                width={600}
                height={360}
              />
            </div>
            <h4 className="dark:text-[#F5FFFA] text-[14px] sm:text-[15px] font-semibold text-center mt-3">
              九州工科自動車専門学校のHP
            </h4>
            <p className="dark:text-[#F5FFFA] text-xs sm:text-sm text-center mt-1">
              フロント部分のコーディングを行いました。
            </p>
          </a>
        </Link>
        <Link href="/works/fukupoke">
          <a className="w-full sm:w-[calc(50%-5px)] block">
            <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)]">
              <Image
                className="object-cover"
                alt="ふくポケのHPの画像"
                src="/fukupoke-top.jpg"
                width={600}
                height={360}
              />
            </div>
            <h4 className="dark:text-[#F5FFFA] text-[14px] sm:text-[15px] font-semibold text-center mt-3">
              福祉のポータルサイト「ふくポケ」のHP
            </h4>
            <p className="dark:text-[#F5FFFA] text-xs sm:text-sm text-center mt-1">
              フロント部分のコーディングを行いました。
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Works;
