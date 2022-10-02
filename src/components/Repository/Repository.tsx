import { FC, useEffect, useState } from "react";
import { fetcher } from "src/lib/fetcher";
import useSWR from "swr";

type RepositoryProps = {
  key: number;
  name: string;
  description: string;
  languagesUrl: string;
};

export const Repository: FC<RepositoryProps> = (props) => {
  const { key, name, description, languagesUrl } = props;
  const { data, error } = useSWR(languagesUrl, fetcher);
  const [total, setTotal] = useState(0);
  const [array, setArray] = useState<string[]>([]);

  useEffect(() => {
    if (!error && data) {
      const keys = Object.keys(data);
      setArray(keys);
    }
  }, [data]);
  useEffect(() => {
    let cnt = 0;
    for (const x of array) {
      cnt += data[x];
    }
    setTotal(cnt);
  }, [array]);
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
    <div key={key} className="mt-5 first-of-type:mt-3 sm:mt-7">
      <h3 className="text-[15px] sm:text-[17px] font-semibold">{name}</h3>
      <p className="text-sm sm:text-[15px] mt-2 sm:mt-3">
        {description ?? "No descroption"}
      </p>
      <div className="w-full h-2 outline outline-transparent rounded-full overflow-hidden flex mt-2 sm:mt-4">
        {array.map((key) => (
          <span
            className={`h-full block ${
              key === "TypeScript" && "bg-[#3178C6]"
            } ${key === "Solidity" && "bg-[#AA6746]"} ${
              key === "CSS" && "bg-[#563d7c]"
            } ${key === "JavaScript" && "bg-[#f1e05a]"} ${
              key === "HTML" && "bg-[#e34c26]"
            }`}
            style={{
              width: `${Math.round((data[key] / total) * 1000) / 10 + "%"}`,
            }}
          ></span>
        ))}
      </div>
      <ul className="flex flex-wrap items-center justify-start space-x-2 mt-2">
        {array.map((key) => (
          <li className="text-xs sm:text-sm flex items-center">
            <span
              className={`w-[10px] h-[10px] mr-1 rounded-full inline-block ${
                key === "TypeScript" && "bg-[#3178C6]"
              } ${key === "Solidity" && "bg-[#AA6746]"} ${
                key === "CSS" && "bg-[#563d7c]"
              } ${key === "JavaScript" && "bg-[#f1e05a]"} ${
                key === "HTML" && "bg-[#e34c26]"
              }`}
            ></span>
            {key}
            <span className="pl-1">
              {Math.round((data[key] / total) * 1000) / 10}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
