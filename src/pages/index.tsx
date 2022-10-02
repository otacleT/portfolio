import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Bio } from "src/components/Bio";
import { Repository } from "src/components/Repository";
import { Skills } from "src/components/Skills";
import { fetcher } from "src/lib/fetcher";
import useSWR from "swr";

const Home: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.github.com/users/otacleT/repos?sort=created&direction=desc&per_page=3",
    fetcher
  );
  console.log({ data, error });
  if (!error && !data) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (data.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <div className="max-w-xl mx-auto px-4 pt-3">
      <Head>
        <title>Taisei Miyabe - Home</title>
      </Head>
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
      </ul>
      <Bio />
      <Skills />
      <section className="section-wrap">
        <h2 className="section-title">GIthub</h2>
        {data.map((data: any) => (
          <Repository
            key={data.id}
            name={data.name}
            description={data.description ?? "No descroption"}
            languagesUrl={data.languages_url}
          />
        ))}
        <button className="w-[200px] h-10 flex items-center justify-center text-white bg-black rounded-md mx-auto mt-7">
          View on Github
        </button>
      </section>
    </div>
  );
};

export default Home;
