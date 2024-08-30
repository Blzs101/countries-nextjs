import CountriesCard from "@/components/CountriesCard";
import { fetchData } from "@/util/countriesFetch";
import Link from "next/link";
export default async function Home() {
  const data = await fetchData()
  return (

    <main className="h-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-5">
      {data &&
        data.map((country) => (
          <Link href={`/${country.name.common.toLowerCase().replace(/\s/g, '')}`} key={country.name.common} className=" h-[500px]">
            <CountriesCard img={country.flags.svg} alt={country.flags.alt} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />
          </Link>
        ))
      }
    </main>

  );
}
