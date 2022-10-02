import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Works: NextPage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 pt-3">
      <h2 className="section-title">Works</h2>
      <h3 className="section-subTitle">- Decentralized app</h3>
      <div className="flex flex-wrap justify-between items-start">
        <Link href="/">
          <a className="block mt-3">
            <div className="w-full aspect-video rounded-md overflow-hidden relative border border-[#E6F0EB]">
              <Image
                className="object-cover"
                src="/gourmet-top.png"
                width={400}
                height={250}
              />
            </div>
            <h4 className="text-[14px] font-semibold text-center mt-3">
              信頼度に応じた飲食店評価アプリ
            </h4>
            <p className="text-xs text-center mt-1">
              ブロックチェーン技術を用いたグルメサービスです。
            </p>
          </a>
        </Link>
      </div>
      <h3 className="section-subTitle mt-8">- Web app</h3>
      <div className="flex flex-wrap justify-between items-start">
        <Link href="/">
          <a className="block mt-3">
            <div className="w-full aspect-video rounded-md overflow-hidden relative border border-[#E6F0EB]">
              <Image
                className="object-cover"
                src="/todo-top.png"
                width={400}
                height={250}
              />
            </div>
            <h4 className="text-[14px] font-semibold text-center mt-3">
              Colorful Todo App
            </h4>
            <p className="text-xs text-center mt-1">
              UI/UXにこだわったTodoアプリです。
            </p>
          </a>
        </Link>
        <Link href="/">
          <a className="block mt-6">
            <div className="w-full aspect-video rounded-md overflow-hidden relative border border-[#E6F0EB]">
              <Image
                className="object-cover"
                src="/twitter-top.png"
                width={400}
                height={250}
              />
            </div>
            <h4 className="text-[14px] font-semibold text-center mt-3">
              No Spoilers Twitter!!!
            </h4>
            <p className="text-xs text-center mt-1">
              Twitterによるネタバレを防ぐアプリです。
            </p>
          </a>
        </Link>
      </div>
      <h3 className="section-subTitle mt-8">- Web page</h3>
      <div className="flex flex-wrap justify-between items-start">
        <Link href="/">
          <a className="block mt-3">
            <div className="w-full aspect-video rounded-md overflow-hidden relative border border-[#E6F0EB]">
              <Image
                className="object-cover"
                src="/kyuko-top.JPG"
                width={400}
                height={250}
              />
            </div>
            <h4 className="text-[14px] font-semibold text-center mt-3">
              九州工科自動車専門学校のHP
            </h4>
            <p className="text-xs text-center mt-1">
              フロント部分のコーディングを行いました。
            </p>
          </a>
        </Link>
        <Link href="/">
          <a className="block mt-7">
            <div className="w-full aspect-video rounded-md overflow-hidden relative border border-[#E6F0EB]">
              <Image
                className="object-cover"
                src="/fukupoke-top.JPG"
                width={400}
                height={250}
              />
            </div>
            <h4 className="text-[14px] font-semibold text-center mt-3">
              福祉のポータルサイト「ふくポケ」のHP
            </h4>
            <p className="text-xs text-center mt-1">
              フロント部分のコーディングを行いました。
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Works;
