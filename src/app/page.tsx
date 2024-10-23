import FilteredMainPage from "@/components/filteredMainPage";
import { fetchCountries } from "@/util/countresFetch";

export default async function page() {
  const countries = await fetchCountries()
  return <FilteredMainPage data={countries} />;
}
