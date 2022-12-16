import React from "react";
import Image from "next/image";

export const Skills = () => {
  return (
    <section className="section-wrap">
      <h2 className="section-title">Skills</h2>
      <ul className="flex items-center space-x-1 sm:space-x-2 space-y-2 mt-3 flex-wrap [&>li]:w-9 sm:[&>li]:w-10 [&>li]:h-9 sm:[&>li]:h-10">
        <li>
          <Image alt="html5" src="/skill-html5.svg" width={42} height={42} />
        </li>
        <li>
          <Image alt="css3" src="/skill-css3.svg" width={42} height={42} />
        </li>
        <li>
          <Image alt="sass" src="/skill-sass.svg" width={42} height={42} />
        </li>
        <li>
          <Image alt="php" src="/skill-php.svg" width={42} height={42} />
        </li>
        <li>
          <Image alt="javascript" src="/skill-js.svg" width={42} height={42} />
        </li>
        <li>
          <Image alt="typescript" src="/skill-ts.svg" width={42} height={42} />
        </li>
        <li>
          <Image alt="react" src="/skill-react.svg" width={42} height={42} />
        </li>
        <li>
          <Image alt="next.js" src="/skill-nextjs.svg" width={42} height={42} />
        </li>
        <li>
          <Image
            alt="tailwind css"
            src="/skill-tailwindcss.svg"
            width={42}
            height={42}
          />
        </li>
        <li>
          <Image
            alt="mantine"
            src="/skill-mantine.svg"
            width={42}
            height={42}
          />
        </li>
        <li>
          <Image
            alt="solidity"
            src="/skill-solidity.svg"
            width={42}
            height={42}
          />
        </li>
        <li>
          <Image
            alt="ethers.js"
            src="/skill-ethers.svg"
            width={42}
            height={42}
          />
        </li>
        <li>
          <Image
            alt="hardhat"
            src="/skill-hardhat.svg"
            width={42}
            height={42}
          />
        </li>
      </ul>
    </section>
  );
};
