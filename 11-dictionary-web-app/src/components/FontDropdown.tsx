import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface FontDropdownProps {
  onFontChange: (font: "sans" | "serif" | "mono") => void;
  fontFamily: "sans" | "serif" | "mono";
}

const FontDropdown = ({ onFontChange, fontFamily }: FontDropdownProps) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center gap-x-3 text-sm font-bold md:text-lg">
          {fontFamily === "sans"
            ? "Sans Serif"
            : fontFamily === "serif"
              ? "Serif"
              : "Mono"}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-purple"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-2xl bg-white shadow-md outline-none dark:bg-gray-600 dark:shadow-purple">
          <div className="flex flex-col py-1 text-sm font-bold text-gray-700 md:text-lg dark:text-white">
            <Menu.Item>
              <button
                className="px-4 py-2 text-left font-sans sm:hover:text-purple"
                onClick={() => onFontChange("sans")}
              >
                Sans Serif
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className="px-4 py-2 text-left font-serif sm:hover:text-purple"
                onClick={() => onFontChange("serif")}
              >
                Serif
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className="px-4 py-2 text-left font-mono sm:hover:text-purple"
                onClick={() => onFontChange("mono")}
              >
                Mono
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FontDropdown;
