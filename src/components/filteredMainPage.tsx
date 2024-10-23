"use client";
import CountriesCard from "@/components/CountriesCard";
import { elementType } from "@/util/countresType";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
export default function FilteredMainPage({ data }: { data: elementType[] }) {
  const [filter, setFilter] = useState<string>("");
  const [continent, setContinent] = useState<string>("");
  const continets: string[] = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  const searchBarRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="flex:col mx-5 gap-8 pb-4 md:flex">
        <form
          className="flex w-auto bg-very-dark-grey-bg text-black dark:bg-dark-blue-element dark:text-white md:mr-auto md:w-1/3"
          onSubmit={(e: React.FormEvent<HTMLElement>) => e.preventDefault()}
        >
          <Image
            alt="glass"
            width={30}
            height={30}
            src={"/glass-darkmode.svg"}
            className="mx-4 hidden dark:block"
            onClick={() => searchBarRef.current?.focus()}
          />
          <Image
            alt="glass"
            width={30}
            height={30}
            src={"/glass-lightmode.svg"}
            className="mx-4 block dark:hidden"
            onClick={() => searchBarRef.current?.focus()}
          />

          <input
            type="text"
            ref={searchBarRef}
            className="w-full bg-very-dark-grey-bg p-4 text-black dark:bg-dark-blue-element dark:text-white"
            placeholder="Search for a country..."
            value={filter}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFilter(e.target.value)
            }
          ></input>
        </form>

        <select
          defaultValue={"DEFAULT"}
          className="my-2 bg-very-dark-grey-bg p-4 text-black dark:bg-dark-blue-element dark:text-white md:my-0"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setContinent(e.target.value)
          }
        >
          <option value="DEFAULT" disabled hidden>
            Filter by Region
          </option>
          {continets.map((data: string) => {
            return (
              <option key={data} value={data}>
                {data}
              </option>
            );
          })}
        </select>
      </div>
      <main className="mx-5 grid h-auto gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data
          ? filter === "" && continent === ""
            ? data.map((country) => (
                <Link
                  href={`/${country.name.common.toLowerCase().replace(/\s/g, "")}`}
                  key={country.name.common}
                  className="h-[500px]"
                >
                  <CountriesCard
                    img={country.flags.svg}
                    alt={country.flags.alt}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                </Link>
              ))
            : data
                .filter((element) => {
                  return filter !== ""
                    ? element.name.common
                        .toLocaleLowerCase()
                        .includes(filter.toLocaleLowerCase())
                    : element;
                })
                .filter((element) => {
                  return continent !== "" && continent !== "All"
                    ? element.region === `${continent}`
                    : element;
                })
                .map((element) => {
                  return (
                    <Link
                      href={`/${element.name.common
                        .toLocaleLowerCase()
                        .replace(/\s/g, "")}`}
                      key={element.name.common}
                      className="h-[500px]"
                    >
                      <CountriesCard
                        img={element.flags.svg}
                        alt={element.flags.alt}
                        name={element.name.common}
                        population={element.population}
                        region={element.region}
                        capital={element.capital}
                        key={element.name.common}
                      />
                    </Link>
                  );
                })
          : null}
      </main>
    </>
  );
}
