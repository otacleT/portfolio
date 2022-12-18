import Image from "next/image";
import React from "react";

export const Social = () => (
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
);
