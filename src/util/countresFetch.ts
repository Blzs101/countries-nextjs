import { elementType } from "./countresType";

export async function fetchCountries() {
    const res = await fetch("https://restcountries.com/v3.1/all",{
        cache: "force-cache"
    });
    const data = await res.json();
    return data as elementType[]; 
}