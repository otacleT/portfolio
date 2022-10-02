import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  //https://api.github.com/users/otacleT/repos?sort="created"&direction="desc"&per_page=3
  https: return (
    <div className="max-w-xl mx-auto px-4 pt-3">
      <p className="text-md text-center tracking-wide">Hi, there👋</p>
      <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mt-24">
        <Image src="/me.JPG" width={150} height={150} />
      </div>
      <h1 className="text-[22px] font-semibold text-center mt-2">
        Taisei Miyabe
      </h1>
      <p className="text-sm text-[#888888] text-center">Master's Student</p>
      <ul className="w-32 flex items-center justify-around mx-auto mt-10">
        <li>
          <a href="https://twitter.com/otacleT" target="_blank" rel="noopener">
            <Image src="/logo-twitter.png" width={25} height={25} />
          </a>
        </li>
        <li>
          <a href="https://github.com/otacleT" target="_blank" rel="noopener">
            <Image src="/logo-github.png" width={25} height={25} />
          </a>
        </li>
        {/* <li>
          <a
            className="block w-5 h-5 overflow-hidden"
            href="https://www.wantedly.com/id/otacleT"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="/logo-wantedly.png"
              className="maxWnone"
              width={30}
              height={30}
            />
          </a>
        </li> */}
      </ul>
      <section className="section-wrap mt-28">
        <h2 className="section-title">Bio</h2>
        <ul className="flex flex-wrap space-y-1 [&>li]:text-sm mt-3">
          <li>
            <span className="font-semibold pr-3">2022.3</span>
            九州工業大学情報工学部　卒業
          </li>
          <li>
            <span className="font-semibold pr-3">2022.4</span>
            九州工業大学情報工学府　入学
          </li>
        </ul>
      </section>
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
    </div>
  );
};

export default Home;
