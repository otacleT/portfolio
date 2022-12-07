import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Work: NextPage = () => {
  return (
    <div className="max-w-xl mx-auto px-4 pt-5">
      <Head>
        <title>Taisei Miyabe - NFTを用いたスクロールゲーム</title>
      </Head>
      <Link href="/works">
        <a className="text-sm pr-1 dark:text-[#F5FFFA]">Works /</a>
      </Link>
      <h2 className="section-title mt-1 dark:text-[#F5FFFA]">
        NFTを用いたスクロールゲーム
      </h2>
      <p className="text-sm sm:text-[15px] leading-6 mt-5 dark:text-[#F5FFFA] block rounded-md bg-[#E6F0EB] dark:bg-[#464646] px-3 py-4">
        このゲームでは、色のNFTを所持しているユーザーのみがゲーム内のキャラクターの色を変更できます。ゲーム自体は単純ですが、「特定のスコア以上を出すと、NFTを獲得可能」にすることで、ユーザーのモチベーションを維持する工夫を行いました。
        <br />
        Kyutech Global Hackathonで海外の学生と開発を行い、
        <strong>楽天企業賞</strong>
        をいただくことができました。
      </p>
      <h3 className="text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]">
        Github
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://github.com/otacleT/scroll-game-client"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/otacleT/scroll-game-client
      </a>
      <h3 className="text-xs sm:text-sm font-bold mt-3 dark:text-[#F5FFFA]">
        ColorNFT(OpenSea)
      </h3>
      <a
        className="text-sm sm:text-[15px] block pt-2 pb-3 border-b-2 border-black dark:border-[#F5FFFA] dark:text-[#F5FFFA]"
        href="https://testnets.opensea.io/ja/assets/goerli/0x54b6c7e79a80a24423dddb32e821fa2e88ececa4/0"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://testnets.opensea.io/ja/assets/goerli/...
      </a>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7">
        <Image
          className="object-cover"
          alt="NFTを用いたスクロールゲームの画像"
          src="/game-top.png"
          width={600}
          height={360}
        />
      </div>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7">
        <Image
          className="object-cover"
          alt="NFTを用いたスクロールゲームの画像"
          src="/game-modal.png"
          width={600}
          height={360}
        />
      </div>
      <div className="w-full aspect-video rounded-md overflow-hidden relative shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)] mt-7">
        <Image
          className="object-cover"
          alt="NFTを用いたスクロールゲームの画像"
          src="/game-colorModal.png"
          width={600}
          height={360}
        />
      </div>
    </div>
  );
};

export default Work;
