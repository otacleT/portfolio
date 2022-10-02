import { Menu, Text } from "@mantine/core";
import { MoonIcon } from "@heroicons/react/24/solid";

export const Header = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <button className="relative w-6 h-6 before:content-[''] before:w-full before:h-[1px] before:absolute before:left-0 before:top-1 before:bg-[#202020] after:content-[''] after:w-full after:h-[1px] after:absolute after:left-0 after:bottom-1 after:bg-[#202020]">
            <span className="w-4 h-[1px] bg-[#202020] absolute t-1/2 -translate-y-1/2 left-0"></span>
          </button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Works</Menu.Item>
          <Menu.Item>Posts</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <button className="h-10 w-10 rounded-md bg-[#805AD5] flex items-center justify-center">
        <MoonIcon className="h-5 w-5 text-[#F5FFFA]" />
      </button>
    </div>
  );
};
