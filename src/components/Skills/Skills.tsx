import Image from "next/image";

export const Skills = () => {
  return (
    <section className="section-wrap">
      <h2 className="section-title">Skills</h2>
      <ul className="flex items-center space-x-1 sm:space-x-2 space-y-1 sm:space-y-2 mt-3 flex-wrap [&>li]:w-8 sm:[&>li]:w-10 [&>li]:h-8 sm:[&>li]:h-10">
        <li>
          <Image src="/skill-html5.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-css3.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-sass.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-php.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-js.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-ts.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-react.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-nextjs.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-tailwindcss.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-mantine.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-solidity.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-ethers.svg" width={42} height={42} />
        </li>
        <li>
          <Image src="/skill-hardhat.svg" width={42} height={42} />
        </li>
      </ul>
    </section>
  );
};
