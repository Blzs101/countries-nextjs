import FilteredMainPage from "@/components/filteredMainPage";
import { fetchData } from "@/util/countriesFetch";

export default async function page() {
    const countries = await fetchData();
    return (
        <FilteredMainPage data={countries} />
    )
}
