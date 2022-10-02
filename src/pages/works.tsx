import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Works: NextPage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 pt-5">
      <h2 className="section-title">Works</h2>
      <h3 className="section-subTitle">- Decentralized app</h3>
      <div className="flex flex-wrap justify-between items-start">
        <Link href="/">
          <a className="w-full sm:w-[calc(50%-5px)] block mt-3">
            <div className="w-full aspect-video rounded-md overflow-hidden relative outline outline-1 outline-[#E6F0EB] dark:outline-[#464646]">
              <Image
                className="object-cover"
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
      <div className="flex flex-wrap justify-between items-start space-y-6 sm:space-y-0 mt-3">
        <Link href="/">
          <a className="w-full sm:w-[calc(50%-5px)] block">
            <div className="w-full aspect-video rounded-md overflow-hidden relative outline outline-1 outline-[#E6F0EB] dark:outline-[#464646]">
              <Image
                className="object-cover"
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
        <Link href="/">
          <a className="w-full sm:w-[calc(50%-5px)] block">
            <div className="w-full aspect-video rounded-md overflow-hidden relative outline outline-1 outline-[#E6F0EB] dark:outline-[#464646]">
              <Image
                className="object-cover"
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
      </div>
      <h3 className="section-subTitle mt-8">- Web page</h3>
      <div className="flex flex-wrap justify-between items-start space-y-6 sm:space-y-0 mt-3">
        <Link href="/">
          <a className="w-full sm:w-[calc(50%-5px)] block">
            <div className="w-full aspect-video rounded-md overflow-hidden relative outline outline-1 outline-[#E6F0EB] dark:outline-[#464646]">
              <Image
                className="object-cover"
                src="/kyuko-top.JPG"
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
        <Link href="/">
          <a className="w-full sm:w-[calc(50%-5px)] block">
            <div className="w-full aspect-video rounded-md overflow-hidden relative outline outline-1 outline-[#E6F0EB] dark:outline-[#464646]">
              <Image
                className="object-cover"
                src="/fukupoke-top.JPG"
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
