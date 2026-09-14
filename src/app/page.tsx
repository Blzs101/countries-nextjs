import FilteredMainPage from "@/components/filteredMainPage";
import { fetchCountries } from "@/util/countresFetch";

export default async function page() {
  const countries = await fetchCountries();
  if (countries.length === 0) {
    return <div className="flex items-center justify-center text-lg font-bold text-black dark:text-white">
      No data found. Try again later...
    </div>;
  }
  return <FilteredMainPage data={countries} />;
}
