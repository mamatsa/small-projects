import Link from "next/link";
import { Search, CountryCard, Filter } from "@/app/components";

export interface Country {
  cca3: string;
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    svg: string;
  };
}

interface HomeProps {
  searchParams?: {
    search?: string;
    region?: string;
  };
}

const Home = async ({ searchParams }: HomeProps) => {
  // Fetch countries
  const res = await fetch("https://restcountries.com/v3.1/all");
  let countries: Country[] = await res.json();

  // Get search params
  const searchWord = searchParams?.search || "";
  const filterRegion = searchParams?.region || "";

  // Helper function to check if a country matches the filters
  const matchesFilters = (
    country: Country,
    searchWord: string,
    region: string,
  ) => {
    const nameMatches =
      !searchWord ||
      country.name.common
        .toLowerCase()
        .includes(searchWord.toLowerCase().trim());
    const regionMatches = !region || country.region === region;
    return nameMatches && regionMatches;
  };

  // Filter countries if search word or region filter is provided
  if (searchWord || filterRegion) {
    countries = countries.filter((country) =>
      matchesFilters(country, searchWord, filterRegion),
    );
  }

  return (
    <main className="px-4 py-6 sm:px-12 2xl:px-20 2xl:py-10">
      <div className="md:mb-10 md:flex md:items-center md:justify-between md:gap-4 2xl:mb-14">
        <Search />
        <Filter />
      </div>
      <ul className="grid grid-flow-row grid-cols-1 justify-center gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {countries.map((country) => (
          <Link
            href={{
              pathname: `/${country.cca3}`,
              query: {
                ...(searchWord && { search: searchWord }),
                ...(filterRegion && { region: filterRegion }),
              },
            }}
            key={country.cca3}
          >
            <CountryCard country={country} />
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default Home;
