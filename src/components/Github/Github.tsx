import { fetcher } from "src/lib/fetcher";
import useSWR from "swr";
import { Repository } from "../Repository";

export const Github = () => {
  const { data, error } = useSWR(
    "https://api.github.com/users/otacleT/repos?sort=created&direction=desc&per_page=3",
    fetcher
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
      <h2 className="section-title">GIthub</h2>
      {data.map((data: any) => (
        <Repository
          key={data.id}
          name={data.name}
          description={data.description ?? "No descroption"}
          languagesUrl={data.languages_url}
        />
      ))}
      <button className="w-[200px] sm:w-[220px] h-10 sm:h-12 flex items-center justify-center text-sm sm:text-base text-white bg-black rounded-md mx-auto mt-10">
        View on Github
      </button>
    </section>
  );
};
