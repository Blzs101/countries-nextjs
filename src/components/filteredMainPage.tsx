"use client"
import CountriesCard from "@/components/CountriesCard";
import { elementType } from "@/util/countriesFetch";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
export default function FilteredMainPage({ data }: { data: elementType[] }) {
  const [filter, setFilter] = useState<string>('');
  const [continent, setContinent] = useState<string>('');
  const continets: string[] = [
    "All",
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  const searchBarRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="gap-8 pb-4 mx-5  flex:col md:flex">
        <form
          className="dark:text-white dark:bg-dark-blue-element text-black bg-very-dark-grey-bg flex w-auto md:mr-auto md:w-1/3"
          onSubmit={(e: React.FormEvent<HTMLElement>) => e.preventDefault()}
        >
          <Image alt="glass" width={30} height={30} src={'/glass-darkmode.svg'} className="mx-4 dark:block hidden" onClick={() => searchBarRef.current?.focus()} />
          <Image alt="glass" width={30} height={30} src={'/glass-lightmode.svg'} className="mx-4 dark:hidden block" onClick={() => searchBarRef.current?.focus()} />

          <input
            type="text"
            ref={searchBarRef}
            className=" dark:text-white dark:bg-dark-blue-element text-black bg-very-dark-grey-bg  p-4 w-full"
            placeholder="Search for a country..."
            value={filter}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFilter(e.target.value)
            }
          ></input>
        </form>

        <select
          defaultValue={"DEFAULT"}
          className="dark:text-white dark:bg-dark-blue-element text-black bg-very-dark-grey-bg  p-4 my-2 md:my-0"
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
      <main className="h-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-5">
        {data ? filter === '' && continent === '' ?
          data.map((country) => (
            <Link href={`/${country.name.common.toLowerCase().replace(/\s/g, '')}`} key={country.name.common} className=" h-[500px]">
              <CountriesCard img={country.flags.svg} alt={country.flags.alt} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />
            </Link>
          )) :
          data
            .filter((element) => {
              return filter !== ''
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
            .map(
              (element) => {
                return (
                  <Link
                    href={`/${element.name.common
                      .toLocaleLowerCase()
                      .replace(/\s/g, '')}`}
                    key={element.name.common}
                    className=" h-[500px]"
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
              }
            )
          : null
        }
      </main>
    </>
  );
}
