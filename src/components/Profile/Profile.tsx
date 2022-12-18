import Image from "next/image";
import React from "react";

export const Profile = () => {
  return (
    <div className="flex justify-center flex-wrap sm:justify-around sm:items-center">
      <div className="w-32 h-32 rounded-full mx-auto sm:mx-0 overflow-hidden mt-24 sm:mt-0 sm:order-2 shadow-[0_0_0_2px_rgba(230,240,235,1)] dark:shadow-[0_0_0_2px_rgba(70,70,70,1)]">
        <Image alt="宮部泰世の画像" src="/me.jpg" width={150} height={150} />
      </div>
      <div className="w-full sm:w-auto sm:order-1 sm:px-3">
        <h1 className="dark:text-[#F5FFFA] text-[22px] sm:text-[34px] font-semibold tracking-wide text-center sm:text-left mt-2">
          Taisei Miyabe
        </h1>
        <p className="text-sm sm:text-base text-[#888888] dark:text-[#dadada] tracking-wide text-center sm:text-left sm:mt-1">
          Master&apos;s Student
        </p>
        <ul className="w-48 sm:w-40 flex items-center justify-around sm:justify-between mx-auto sm:mx-0 mt-10 sm:mt-5">
          <li>
            <a
              href="https://twitter.com/otacleT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert-[50%] dark:sepia-[0%] dark:saturate-[11%] dark:hue-rotate-[143deg] dark:brightness-[101%] dark:contrast-[93%]"
                alt="twitterのロゴ"
                src="/logo-twitter.png"
                width={25}
                height={25}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/otacleT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert-[50%] dark:sepia-[0%] dark:saturate-[11%] dark:hue-rotate-[143deg] dark:brightness-[101%] dark:contrast-[93%]"
                alt="githubのロゴ"
                src="/logo-github.png"
                width={25}
                height={25}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.wantedly.com/id/otacleT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert-[50%] dark:sepia-[0%] dark:saturate-[11%] dark:hue-rotate-[143deg] dark:brightness-[101%] dark:contrast-[93%]"
                alt="wantedlyのロゴ"
                src="/logo-wantedly.png"
                width={27}
                height={22}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
