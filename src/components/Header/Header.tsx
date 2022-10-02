import { MoonIcon } from "@heroicons/react/24/solid";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { Menu } from "@mantine/core";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
      <ul className="w-40 hidden sm:flex justify-between items-center">
        <li>
          <Link href="/">
            <a className="px-3 py-2">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a className="px-3 py-2">Works</a>
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
            className={`h-10 w-10 flex sm:hidden items-center justify-center rounded-md hover:bg-[#E6F0EB] ${
              opened && "border border-[#DCE6E1] bg-[#E6F0EB]"
            }`}
          >
            <Bars3CenterLeftIcon className="w-9 h-7" />
          </button>
        </Menu.Target>

        <Menu.Dropdown className="sm:hidden">
          <Menu.Item
            className="hover:decoration-1 hover:underline"
            component="a"
            href="/"
          >
            Home
          </Menu.Item>
          <Menu.Item
            className="hover:decoration-1 hover:underline"
            component="a"
            href="/works"
          >
            Works
          </Menu.Item>
          <p className="block px-3 py-2 text-sm text-[#888888]">coming soon</p>
        </Menu.Dropdown>
      </Menu>
      <button className="h-10 w-10 rounded-md bg-[#805AD5] flex items-center justify-center">
        <MoonIcon className="h-5 w-5 text-[#F5FFFA]" />
      </button>
    </div>
  );
};
