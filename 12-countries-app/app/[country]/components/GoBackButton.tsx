"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BackArrowIcon } from "@/app/components";

const GoBackButton = () => {
  const searchParams = useSearchParams();
  const searchWord = searchParams.get("search");
  const filterRegion = searchParams.get("region");

  return (
    <Link
      href={{
        pathname: "/",
        query: {
          ...(searchWord && { search: searchWord }),
          ...(filterRegion && { region: filterRegion }),
        },
      }}
    >
      <div className="mb-10 flex w-min items-center gap-2 rounded bg-white px-6 py-2 shadow-lg hover:bg-light-gray dark:bg-blue-700 dark:hover:bg-blue-800 lg:mb-12 lg:rounded-md xl:mb-14 2xl:mb-20 2xl:text-lg">
        <BackArrowIcon /> <span>Back</span>
      </div>
    </Link>
  );
};

export default GoBackButton;
