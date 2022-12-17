import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Bio } from "src/components/Bio";
import { Github } from "src/components/Github";
import { Hi } from "src/components/Hi";
import { Profile } from "src/components/Profile";
import { Seo } from "src/components/Seo";
import { Skills } from "src/components/Skills";
import { SWRConfig } from "swr";

export const getStaticProps: GetStaticProps = async () => {
  const GITHUB_URL =
    "https://api.github.com/users/otacleT/repos?sort=updated&direction=desc&per_page=3";
  const repository = await fetch(GITHUB_URL);
  const repositoryData = await repository.json();

  return {
    props: {
      fallback: {
        [GITHUB_URL]: repositoryData,
      },
    },
    revalidate: 3600,
  };
};

const Home: NextPage = (props) => {
  const { fallback }: any = props;
  return (
    <div className="max-w-xl mx-auto px-4 pt-3 sm:pt-10">
      <Seo
        pageTitle="Home"
        pageImg={"https://www.otacle.com"}
        pageImgWidth={1280}
        pageImgHeight={960}
        pagePath={"/"}
      />
      <Hi />
      <Profile />
      <Bio />
      <Skills />
      <SWRConfig value={{ fallback }}>
        <Github />
      </SWRConfig>
    </div>
  );
};

export default Home;
