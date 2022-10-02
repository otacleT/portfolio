import Image from "next/image";

export const Skills = () => {
  return (
    <section className="section-wrap">
      <h2 className="section-title">Skills</h2>
      <ul className="flex items-center space-x-1 space-y-1 mt-3 flex-wrap [&>li]:w-8 [&>li]:h-8">
        <li>
          <Image src="/skill-html5.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-css3.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-sass.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-php.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-js.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-ts.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-react.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-nextjs.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-tailwindcss.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-mantine.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-solidity.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-ethers.svg" width={32} height={32} />
        </li>
        <li>
          <Image src="/skill-hardhat.svg" width={32} height={32} />
        </li>
      </ul>
    </section>
  );
};
