import { Logo, IconMoon } from "./svg";
import FontDropdown from "./FontDropdown";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Logo />

      <div className="flex items-center">
        {/* Font family select */}
        <FontDropdown />

        <div className="mx-4 h-8 w-px bg-gray-100"></div>
        {/* Dark mode toggle */}
        <label className="relative mr-4 inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            value="Dark mode toggle"
            className="peer sr-only"
          />
          <div className="peer-checked:bg-purple peer-focus:ring-purple peer h-5 w-10 rounded-full bg-gray-300 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:bg-white after:transition-all peer-checked:after:translate-x-5 peer-focus:outline-none peer-focus:ring-1 rtl:peer-checked:after:-translate-x-full"></div>
        </label>

        <button aria-pressed="false" aria-label="Dark mode toggle">
          <IconMoon />
        </button>
      </div>
    </header>
  );
};

export default Header;