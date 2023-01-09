import React from "react";
import { FC, useEffect, useState } from "react";
import useSWR from "swr/immutable";

type RepositoryProps = {
  name: string;
  description: string;
  key: string;
  languagesUrl: string;
  url: string;
};

export const Repository: FC<RepositoryProps> = (props) => {
  const { name, description, languagesUrl, url } = props;
  const { data, error } = useSWR(languagesUrl);
  const [total, setTotal] = useState(0);
  const [array, setArray] = useState<string[]>([]);

  useEffect(() => {
    if (!error && data) {
      const keys = Object.keys(data);
      setArray(keys);
    }
  }, [data, error]);
  useEffect(() => {
    let cnt = 0;
    for (const x of array) {
      cnt += data[x];
    }
    setTotal(cnt);
  }, [array, data]);
  if (!error && !data) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (data.length === 0) {
    return <div>データは空です</div>;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block mt-5 first-of-type:mt-3 sm:mt-7"
    >
      <h3 className="dark:text-[#F5FFFA] text-[15px] sm:text-[17px] font-semibold">
        {name}
      </h3>
      <p className="dark:text-[#F5FFFA] text-sm sm:text-[15px] mt-2 sm:mt-3">
        {description ?? "No descroption"}
      </p>
      <div className="w-full h-2 outline outline-transparent rounded-full overflow-hidden flex mt-2 sm:mt-4">
        {array.map((key) => (
          <span
            key={Math.round(Math.random() * 10000000000)}
            className={`h-full block ${
              key === "TypeScript" && "bg-[#3178C6]"
            } ${key === "Solidity" && "bg-[#AA6746]"} ${
              key === "CSS" && "bg-[#563d7c]"
            } ${key === "JavaScript" && "bg-[#f1e05a]"} ${
              key === "HTML" && "bg-[#e34c26]"
            } ${key === "Vue" && "bg-[#41b883]"}`}
            style={{
              width: `${Math.round((data[key] / total) * 1000) / 10 + "%"}`,
            }}
          ></span>
        ))}
      </div>
      <ul className="flex flex-wrap items-center justify-start space-x-2 mt-2">
        {array.map((key) => (
          <li
            key={Math.round(Math.random() * 10000000000)}
            className="text-xs sm:text-sm flex items-center dark:text-[#F5FFFA]"
          >
            <span
              className={`w-[10px] h-[10px] mr-1 rounded-full inline-block ${
                key === "TypeScript" && "bg-[#3178C6]"
              } ${key === "Solidity" && "bg-[#AA6746]"} ${
                key === "CSS" && "bg-[#563d7c]"
              } ${key === "JavaScript" && "bg-[#f1e05a]"} ${
                key === "HTML" && "bg-[#e34c26]"
              } ${key === "Vue" && "bg-[#41b883]"}`}
            ></span>
            {key}
            <span className="pl-1">
              {Math.round((data[key] / total) * 1000) / 10}%
            </span>
          </li>
        ))}
      </ul>
    </a>
  );
};
