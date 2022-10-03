import { MoonIcon } from "@heroicons/react/24/solid";
import { Bars3CenterLeftIcon, SunIcon } from "@heroicons/react/24/outline";
import { Menu } from "@mantine/core";
import { useCallback, useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [dark, setDark] = useState<boolean>(false);
  const toggleDarkMode = useCallback(() => {
    // htmlタグにdarkクラスが含まれているかどうか
    if (document.documentElement.classList.contains("dark")) {
      // darkクラスが含まれているならライトモードに変更
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      // darkクラスが含まれていないならダークモードに変更
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  }, []);
  const handleDarkMode = useCallback(() => {
    setDark(!dark);
    toggleDarkMode();
  }, []);
  return (
    <div className="w-full h-16 py-3 fixed top-0 left-0 backdrop-blur-sm z-50">
      <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
        <ul className="w-40 hidden sm:flex justify-between items-center">
          <li>
            <Link href="/">
              <a className="dark:text-[#F5FFFA] px-3 py-2 rounded-md hover:bg-[#E6F0EB] dark:hover:bg-[#3d3d3d] hover:underline hover:decoration-1">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/works">
              <a className="dark:text-[#F5FFFA] px-3 py-2 rounded-md hover:bg-[#E6F0EB] dark:hover:bg-[#3d3d3d] hover:underline hover:decoration-1">
                Works
              </a>
            </Link>
          </li>
        </ul>
        <Menu
          width={220}
          radius="md"
          position="bottom-start"
          onOpen={() => setOpened(true)}
          onClose={() => setOpened(false)}
          closeOnItemClick={true}
        >
          <Menu.Target>
            <button
              className={`h-10 w-10 flex sm:hidden items-center justify-center rounded-md hover:bg-[#E6F0EB] dark:hover:bg-[#3d3d3d] ${
                opened &&
                "border border-[#DCE6E1] bg-[#E6F0EB] dark:border-[#464646] dark:bg-[#3d3d3d]"
              }`}
            >
              <Bars3CenterLeftIcon className="w-9 h-7 dark:text-[#F5FFFA]" />
            </button>
          </Menu.Target>

          <Menu.Dropdown className="sm:hidden dark:bg-[#151515] dark:border-[#464646]">
            <Menu.Item
              className="block p-3 hover:decoration-1 hover:underline dark:text-[#F5FFFA] dark:hover:bg-[#3d3d3d]"
              component="a"
              href="/"
            >
              Home
            </Menu.Item>
            <Menu.Item
              className="block p-3 hover:decoration-1 hover:underline dark:text-[#F5FFFA] dark:hover:bg-[#3d3d3d]"
              component="a"
              href="/works"
            >
              Works
            </Menu.Item>
            <p className="block p-3 text-sm text-[#888888]">coming soon</p>
          </Menu.Dropdown>
        </Menu>
        <button
          className="h-10 w-10 rounded-md bg-[#805AD5] dark:bg-[#FBD38D] flex items-center justify-center"
          onClick={handleDarkMode}
        >
          <MoonIcon className="h-5 w-5 text-[#F5FFFA] dark:hidden" />
          <SunIcon className="h-5 w-5 text-black hidden dark:block" />
        </button>
      </div>
    </div>
  );
};
