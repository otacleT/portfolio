import { FC } from "react";
import useSWRImmutable from "swr/immutable";
import { Repository } from "../Repository";

export const Github: FC = () => {
  const { data, error } = useSWRImmutable(
    "https://api.github.com/users/otacleT/repos?sort=updated&direction=desc&per_page=3"
  );
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
    <section className="section-wrap">
      <h2 className="section-title">Github</h2>
      {data.map((data: any) => (
        <Repository
          key={data.id}
          name={data.name}
          url={data.html_url}
          description={data.description ?? "No descroption"}
          languagesUrl={data.languages_url}
        />
      ))}
      <a
        href="https://github.com/otacleT"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[200px] sm:w-[220px] h-10 sm:h-12 flex items-center justify-center text-sm sm:text-base text-white bg-black rounded-md mx-auto mt-10"
      >
        View on Github
      </a>
    </section>
  );
};
