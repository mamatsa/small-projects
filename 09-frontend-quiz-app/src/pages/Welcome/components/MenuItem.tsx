import { Subject } from "App";

interface MenuItemProps {
  title: Subject;
  onQuizChoose: (subject: Subject) => void;
  children: React.ReactNode;
}

const MenuItem = ({ title, onQuizChoose, children }: MenuItemProps) => {
  return (
    <button
      className="group flex w-full cursor-pointer items-center gap-4 rounded-xl bg-white p-3 dark:bg-navy"
      onClick={() => {
        onQuizChoose(title);
      }}
    >
      {children}
      <span className="text-lg font-medium dark:text-white sm:text-xl sm:group-hover:translate-x-2">
        {title}
      </span>
    </button>
  );
};

export default MenuItem;
