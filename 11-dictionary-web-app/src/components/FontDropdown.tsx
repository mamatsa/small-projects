import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const FontDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-3 bg-white text-sm font-bold">
          Sans Serif
          <ChevronDownIcon
            className="text-purple -mr-1 h-5 w-5"
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-2xl bg-white shadow-lg ring-1 ring-gray-700 ring-opacity-5 focus:outline-none">
          <div className="flex flex-col py-1">
            <Menu.Item>
              <button
                className={`hover:text-purple px-4 py-2 text-left text-sm font-bold text-gray-700`}
              >
                Sans Serif
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className={`hover:text-purple px-4 py-2 text-left text-sm text-gray-700`}
              >
                Serif
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className={`hover:text-purple px-4 py-2 text-left text-sm text-gray-700`}
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