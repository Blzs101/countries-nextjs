import { elementType } from "./countresType";


export async function fetchCountries() {
    const data = await fetch("https://restcountries.com/v3.1/all", {
        next: {
            revalidate: 60 * 60 * 24
        }
    })
    const countriesAll = await data.json();

    return countriesAll as elementType[];

}